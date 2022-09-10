import React, { useEffect, useState } from 'react';
import WPAPI from 'wpapi';
import Loader from 'react-loader-spinner';
import parser from 'react-html-parser';

const wp = new WPAPI({
  endpoint: 'http://localhost:10004/wp-json',
});

//SETTING CPT ROUTE
wp.flag = wp.registerRoute('wp/v2', '/flag/(?P<id>\\d+)');
// wp.flag = wp.registerRoute('wp/v2', '/flag');
let fetchedPosts;

function DoWpapiOne() {
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(2);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        //FETCH CUSTOM POST TYPES
        fetchedPosts = await wp.posts();
        // const fetchedPosts = await wp.flag();
        const totalPages = fetchedPosts._paging.totalPages;
        setTotalPages(totalPages);

        console.log(fetchedPosts);
        setArticles(fetchedPosts);
      } catch (e) {
        // print error
        console.log(e);
        return [];
      }
    };
    fetchPosts();
  }, []);

  const fetchPosts = async (pageNumber) => {
    const request = wp.posts();

    if (pageNumber > 1) {
      request.page(pageNumber);
    }

    const posts = await request.get();

    return {
      posts,
      nextPageNumber:
        posts._paging.totalPages > pageNumber ? pageNumber + 1 : null,
    };
  };

  const handleLoadMore = async () => {
    const snapshot = await fetchPosts(pageNumber);

    setPageNumber(snapshot.nextPageNumber);
    setArticles([
      // Preserve previous WordPress posts
      ...articles,

      // Add new WordPress posts
      ...snapshot.posts,
    ]);
  };

  const handleNext = async () => {
    // console.log('next');
    // const snapshot = await wp.posts();
    const snapshot = await wp.posts().page(pageNumber);
    const totalPages = snapshot._paging.totalPages;
    console.log(totalPages);
    setPageNumber(pageNumber + 1);
    if (totalPages <= pageNumber) {
      return;
    }
    console.log(snapshot);
    console.log(pageNumber);
    setArticles([...snapshot]);
  };

  return (
    <>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            {parser(article.title.rendered)}
            <span className="badge badge-danger">{article.id}</span>
          </li>
        ))}
      </ul>
      {totalPages > 1 && pageNumber && (
        <>
          <button className="btn btn-secondary" onClick={handleLoadMore}>
            Load more
          </button>
          <button className="btn btn-primary ml-2" onClick={handleNext}>
            Next
          </button>
        </>
      )}
    </>
  );
}

export default DoWpapiOne;

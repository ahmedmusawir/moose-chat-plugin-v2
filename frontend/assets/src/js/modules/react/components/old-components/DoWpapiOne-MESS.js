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
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);

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

  const fetchPrevPosts = async (pageNumber) => {
    const request = wp.posts();

    // console.log('fetchPrevPosts', pageNumber);
    setPageNumber(pageNumber + 1);
    if (pageNumber > 1) {
      request.page(pageNumber);
    }

    const posts = await request.get();

    return {
      posts,
      prevPageNumber: pageNumber - 1,
    };
  };

  const handleNext = async () => {
    setPrevBtnDisabled(false);
    console.log('HANDLE NEXT PAGE NUMBER:', pageNumber);

    const snapshot = await fetchPosts(pageNumber);

    setPageNumber(snapshot.nextPageNumber);
    // console.log(snapshot.posts);
    setArticles([
      // Add new WordPress posts
      ...snapshot.posts,
    ]);

    if (totalPages == pageNumber) {
      setNextBtnDisabled(true);
      setPageNumber(totalPages);
    }
  };

  const handlePrev = async () => {
    const snapshot = await fetchPrevPosts(pageNumber);
    console.log('HANDLE PREV PAGE NUMBER:', pageNumber);

    setPageNumber(snapshot.prevPageNumber);
    setArticles([
      // Add new WordPress posts
      ...snapshot.posts,
    ]);

    if (totalPages == pageNumber) {
      setNextBtnDisabled(true);
    }
    if (pageNumber == 1) {
      setNextBtnDisabled(false);
      setPrevBtnDisabled(true);
    }
  };

  return (
    <>
      <ul>
        <div className="alert alert-success">Next Page: {pageNumber}</div>
        {articles.map((article) => (
          <li key={article.id}>
            {parser(article.title.rendered)}
            <span className="badge badge-danger">{article.id}</span>
          </li>
        ))}
      </ul>
      <>
        <button
          className="btn btn-primary ml-2"
          onClick={handlePrev}
          disabled={prevBtnDisabled}
        >
          Prev
        </button>
        <button
          className="btn btn-primary ml-2"
          onClick={handleNext}
          disabled={nextBtnDisabled}
        >
          Next
        </button>
      </>
    </>
  );
}

export default DoWpapiOne;

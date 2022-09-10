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

const fetchPosts = async (pageNumber) => {
  const request = wp.flag();

  if (pageNumber) {
    request.page(pageNumber);
  }

  const posts = await request.get();

  return {
    posts,
    nextPageNumber:
      posts._paging.totalPages > pageNumber ? pageNumber + 1 : null,
  };
};

function DoWpapiOne() {
  const [articles, setArticles] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(1);

  const handleClick = async () => {
    const snapshot = await fetchPosts(pageNumber);

    setPageNumber(snapshot.nextPageNumber);
    setArticles([
      // Preserve previous WordPress posts
      ...articles,

      // Add new WordPress posts
      ...snapshot.posts,
    ]);
  };

  return (
    <>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title.rendered}</li>
        ))}
      </ul>
      {pageNumber && (
        <button onClick={handleClick}>
          {pageNumber > 1 ? 'Load more' : 'Get initial posts'}
        </button>
      )}
    </>
  );
}

export default DoWpapiOne;

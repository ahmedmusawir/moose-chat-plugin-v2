import React, { useState, useContext } from 'react';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import parse from 'react-html-parser';
import { BlogContext } from '../contexts/BlogContext';

function BlogIndex() {
  const {
    posts,
    deletePost,
    handleLoadMore,
    totalPages,
    pageNumber,
    isPending,
  } = useContext(BlogContext);

  return (
    <div>
      <section className="list-group">
        {isPending && (
          <div className="text-center">
            <Loader type="ThreeDots" color="red" height={100} width={100} />
          </div>
        )}
        {posts &&
          posts.map((post) => (
            <article key={post.id} className="list-group-item">
              <div className="mb-2 row">
                <div className="col-sm-10">
                  <Link to={`/post/${post.id}`}>
                    <li className="list-group-item">
                      {parse(post.title.rendered)}{' '}
                      <span className="badge badge-primary pt-2">
                        Post ID: {post.id}
                      </span>
                    </li>
                  </Link>
                </div>
                <div className="col-sm-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => deletePost(post.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
      </section>
      {totalPages > 1 && pageNumber && (
        <button className="btn btn-secondary" onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
}

export default BlogIndex;

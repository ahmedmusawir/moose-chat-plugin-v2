import React, { useEffect, useState } from 'react';
import WPAPI from 'wpapi';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import parse from 'react-html-parser';

const wp = new WPAPI({
  endpoint: 'http://localhost:10004/wp-json',
});

function DoWpapiOne() {
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(2);
  const [totalPages, setTotalPages] = useState(1);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsPending(true);
      try {
        //FETCH POSTS
        const fetchedPosts = await wp.posts();
        const totalPages = fetchedPosts._paging.totalPages;
        setTotalPages(totalPages);

        console.log(fetchedPosts);
        setArticles(fetchedPosts);
        setIsPending(false);
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
    console.log('HANDLE MORE', pageNumber);

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
      <div>
        <section className="list-group">
          {isPending && (
            <div className="text-center">
              <Loader type="Bars" color="red" height={100} width={100} />
            </div>
          )}
          {articles &&
            articles.map((post) => (
              <article key={post.id} className="list-group-item">
                <div className="mb-2 row">
                  <div className="col-sm-10">
                    <Link to={`/post/${post.id}`}>
                      <li className="list-group-item">
                        {parse(post.title.rendered)}{' '}
                        <span className="badge badge-primary">
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
      </div>
      {totalPages > 1 && pageNumber && (
        <>
          <button className="btn btn-secondary" onClick={handleLoadMore}>
            Load more
          </button>
        </>
      )}
    </>
  );
}

export default DoWpapiOne;

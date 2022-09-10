import React, { useEffect, useState } from 'react';
import WPAPI from 'wpapi';
import Loader from 'react-loader-spinner';
import parser from 'react-html-parser';

function DoWpapiOne() {
  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const wp = new WPAPI({
    endpoint: 'http://localhost:10004/wp-json',
    username: 'cgteam',
    password: '8gLw rmzE hQhZ av4L 1ljg x119',
  });

  //SETTING CPT ROUTE
  // wp.flag = wp.registerRoute('wp/v2', '/flag/(?P<id>\\d+)');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsPending(true);

        // FETCH POSTS BY TIME, AUTHOR & CATEGORIES
        const fetchedPosts = await wp
          .posts()
          // BEFORE JAN 2021
          .param('before', new Date('2021-01-01'))
          // AFTER AUG 2020
          .param('after', new Date('2020-08-01'))
          // AUTHOR CGTEAM ID: 3
          .param('author', 3)
          // CATEGORIES: 71 (Basic)
          .param('categories', [71])
          // CUSTOM TAXONOMY STATE: GA (id: 18)
          .param('states', [18])
          .get();

        // FETCH POSTS
        // const fetchedPosts = await wp.posts().get();

        console.log(fetchedPosts);
        setPosts(fetchedPosts);
        setIsPending(false);
      } catch (e) {
        // print error
        console.log(e);
        return [];
      }
    };
    fetchPosts();
  }, []);
  return (
    <div className="container-fluid">
      <section className="row">
        {isPending && (
          <div className="text-center">
            <Loader type="Bars" color="red" height={100} width={100} />
          </div>
        )}

        {/* POSTS ONLY */}
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <h5>{parser(post.title.rendered)}</h5>
            {parser(post.excerpt.rendered)}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {post.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {post.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              CatID:{' '}
              {post.categories.map((cat) => {
                return cat + ', ';
              })}
            </span>
            <span className="badge badge-secondary pill p-2 ml-2">
              {post.date}
            </span>
            <span className="badge badge-light pill p-2 ml-2">
              Author ID: {post.author}
            </span>
          </li>
        ))}

        {/* CATEGORIES ONLY */}
        {/* {posts.map((cat) => (
          <li key={cat.id} className="list-group-item">
            {parser(cat.name)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {cat.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {cat.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              Taxonomy: {cat.taxonomy}
            </span>
          </li>
        ))} */}
      </section>
    </div>
  );
}

export default DoWpapiOne;

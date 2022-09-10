import React, { useEffect, useState } from 'react';
import WPAPI from 'wpapi';
import Loader from 'react-loader-spinner';

function DoWpapiCrud() {
  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const wp = new WPAPI({
    endpoint: 'http://localhost:10004/wp-json',
    username: 'cgteam',
    password: '6jmY eAy0 IdVs AdFQ S7sC YqgL',
  });

  // SETTING CPT ROUTE
  // wp.flag = wp.registerRoute('wp/v2', '/flag/(?P<id>\\d+)');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsPending(true);
        // READ POSTS
        // const fetchedPosts = await wp.posts();

        // CREATE POST
        // const fetchedPosts = await wp.posts().create({
        //   title: 'A POST CREATED BY WPAPI',
        //   content: 'CONTENT OF A POST CREATED BY WPAPI',
        //   categories: [157, 30],
        //   tags: [374, 375],
        //   acf: {
        //     your_name: 'moose is loose',
        //   },
        //   status: 'publish',
        // });

        // UPDATE POST
        // const fetchedPosts = await wp
        //   .posts()
        //   .id(1433)
        //   .update({
        //     title: 'A POST EDITED OR UPDATED BY WPAPI',
        //     content: 'THE CONTENT OF THE EDITED POST BY WPAPI',
        //     categories: [157, 30],
        //     tags: [374, 375],
        //     acf: {
        //       your_name: 'moose is loose EDITED',
        //     },
        //     status: 'publish',
        //   });

        // DELETE POST
        const fetchedPosts = await wp.posts().id(1433).delete();

        console.log(fetchedPosts);
        setPosts(fetchedPosts);
        setIsPending(false);
      } catch (e) {
        console.log('ERROR:', e);
        setPosts(e);
        return [];
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="list-group">
      <section className="list-group">
        {isPending && (
          <div className="text-center">
            <Loader type="Bars" color="red" height={100} width={100} />
          </div>
        )}

        {JSON.stringify(posts, null, 2)}
        {posts.message && (
          <div className="alert alert-danger">{posts.message}</div>
        )}
      </section>
    </div>
  );
}

export default DoWpapiCrud;

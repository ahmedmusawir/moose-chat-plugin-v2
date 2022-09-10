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
  wp.flag = wp.registerRoute('wp/v2', '/flag/(?P<id>\\d+)');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsPending(true);
        // READ CUSTOM POSTS - FLAG
        // const fetchedPosts = await wp.flag();

        // CREATE POST
        // const fetchedPosts = await wp.flag().create({
        //   title: 'A CUSTOM POST- FLAG - CREATED BY WPAPI',
        //   content: 'CONTENT OF A CUSTOM POST - FLAG CREATED BY WPAPI',
        //   acf: {
        //     name: 'moose is loose IN CUSTOM POST',
        //   },
        //   status: 'publish',
        // });

        // UPDATE POST
        // const fetchedPosts = await wp
        //   .flag()
        //   .id(1208)
        //   .update({
        //     title: 'A CUSTOM POST - FLAG - EDITED OR UPDATED BY WPAPI',
        //     content: 'THE CONTENT OF THE EDITED CUSTOM - FLAG - POST BY WPAPI',
        //     acf: {
        //       name: 'moose is loose IN EDITED CUSTOM POST - FLAG',
        //     },
        //     status: 'publish',
        //   });

        // DELETE POST
        const fetchedPosts = await wp.flag().id(1207).delete();

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

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
        // READ USERS
        // const fetchedPosts = await wp.users();

        // CREATE USER
        // const fetchedPosts = await wp.users().create({
        //   username: 'keyabibo',
        //   name: 'Keya Bibo',
        //   first_name: 'Keya',
        //   last_name: 'Mony',
        //   email: 'keya@bibo.com',
        //   roles: ['editor'],
        //   description:
        //     'This is a user being created via WPApi using WP App Password',
        //   password: 'pass1234',
        // });

        // UPDATE USER
        // const fetchedPosts = await wp
        //   .users()
        //   .id(4)
        //   .update({
        //     username: 'keyabibo',
        //     name: 'Keya Mony',
        //     first_name: 'Keya123',
        //     last_name: 'Bibo123',
        //     email: 'keyabibo@hotmail.com',
        //     roles: ['editor', 'author'],
        //     description:
        //       'EDITED --- This is a user being created via WPApi using WP App Password',
        //     password: 'pass12345',
        //   });

        // DELETE USER
        // const fetchedPosts = await wp.users().id(4).delete();
        const fetchedPosts = await wp
          .users()
          .id(4)
          .delete('force=true&reassign=1');

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

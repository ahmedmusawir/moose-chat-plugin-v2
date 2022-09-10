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
        // READ CATEGORIES
        // const fetchedPosts = await wp.categories();

        // CREATE CATEGORY
        // const fetchedPosts = await wp.categories().create({
        //   name: 'A A A WPAPI CAT ONE',
        //   description: 'This is category inserted via WPAPI',
        //   taxonomy: 'category',
        // });

        // CREATE SUB CATEGORY
        // const fetchedPosts = await wp.categories().create({
        //   name: 'SUB CAT A A A WPAPI CAT ONE',
        //   description: 'This is a sub-category inserted via WPAPI',
        //   taxonomy: 'category',
        //   parent: 380,
        // });

        // CREATE UPDATE CATEGORY
        // const fetchedPosts = await wp.categories().id(383).update({
        //   name: 'UPDATED SUB CAT A A A WPAPI CAT ONE',
        //   description:
        //     'UPDATED --- This sub-category has been UPDATED via WPAPI',
        //   taxonomy: 'category',
        // });

        // DELETE POST
        // const fetchedPosts = await wp.categories().id(380).delete();
        const fetchedPosts = await wp.categories().id(380).delete('force=true');

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

import React, { useEffect, useState } from 'react';
import WPAPI from 'wpapi';
import Loader from 'react-loader-spinner';
import parser from 'react-html-parser';

function DoWpapiOne() {
  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const wp = new WPAPI({
    endpoint: 'http://localhost:10004/wp-json',
  });

  //SETTING CPT ROUTE
  wp.flag = wp.registerRoute('wp/v2', '/flag/(?P<id>\\d+)');
  // wp.flag = wp.registerRoute('wp/v2', '/flag');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsPending(true);

        //FETCH CUSTOM POST TYPES
        // const fetchedPosts = await wp.flag().id(1209).get();
        // const fetchedPosts = await wp.flag().perPage(5).get();
        const fetchedPosts = await wp.flag();

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
    <div className="list-group">
      <section className="list-group">
        {isPending && (
          <div className="text-center">
            <Loader type="Bars" color="red" height={100} width={100} />
          </div>
        )}
        {/* CUSTOM POST TYPES ONLY */}
        {posts.map((cpt) => (
          <li key={cpt.id} className="list-group-item">
            {parser(cpt.title.rendered)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {cpt.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {cpt.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              TYPE: {cpt.type}
            </span>
          </li>
        ))}
      </section>
    </div>
  );
}

export default DoWpapiOne;

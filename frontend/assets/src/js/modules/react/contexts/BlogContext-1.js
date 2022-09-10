import React, { createContext, useState, useEffect } from 'react';
import WPAPI from 'wpapi';
export const BlogContext = createContext();

function BlogContextProvider(props) {
  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const wp = new WPAPI({
    endpoint: 'https://digitalsupportstaff.com/wp-json',
    username: 'cgteam',
    password: 'hUoV 8WCW Dllz 4rP4 BlEo Ip27',
  });

  // const wp = new WPAPI({
  //   endpoint: 'http://localhost:10004/wp-json',
  //   username: 'cgteam',
  //   password: 'yAAC Qruf eCy3 xyou i1Rf zZAb',
  // });

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsPending(true);
        // Fetch posts
        const fetchedPosts = await wp.posts().get();

        // console.log(fetchedPosts);
        setPosts(fetchedPosts);
        setIsPending(false);
      } catch (e) {
        // print error
        console.log(e);
        return [];
      }
    }

    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    setIsPending(true);

    await wp
      .posts()
      .id(id)
      .delete()
      .then((res) => {
        console.log(res);
        setPosts(posts.filter((post) => post.id !== res.id));
        setIsPending(false);
      });
  };

  return (
    <BlogContext.Provider value={{ posts, setPosts, deletePost, isPending }}>
      {props.children}
    </BlogContext.Provider>
  );
}

export default BlogContextProvider;

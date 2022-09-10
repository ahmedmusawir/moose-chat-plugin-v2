import React, { useEffect, useState } from 'react';
import Page from './layouts/Page';
import Content from './layouts/Content';
import parse from 'react-html-parser';
import Loader from 'react-loader-spinner';
import $ from 'jquery';

function DoAjax() {
  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(false);

  let newPostData = {
    title: 'POST VIA JQUERY AJAX, WP-NONCE & REACT - 1',
    content: 'This is the first try ... content -1',
    status: 'publish',
  };

  useEffect(() => {
    // const contentBox = $('.content');
    // contentBox.css('border', '1rem dotted red');
    const fetchPosts = async () => {
      await $.ajax({
        url: selflistData.root_url + '/wp-json/wp/v2/posts',
        async: true,
        type: 'GET',
      })
        .done((res) => {
          console.log(res);
          console.log('Ajax with REST & Nonce Success!');
        })
        .fail((res) => {
          console.log('Ajax Failed');
          console.log(res);
        });
    };
    fetchPosts();
  }, []);
  return (
    <Page wide={false} pageTitle="Home Page">
      <div className="row justify-content-center">
        <div className="col-sm-12">
          <Content width="w-100" cssClassNames="bg-light mt-3">
            <h1>This is the Sample Page</h1>
            <h4>COPY ME ...</h4>
          </Content>
        </div>
      </div>
    </Page>
  );
}

export default DoAjax;

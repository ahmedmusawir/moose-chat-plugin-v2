import React, { useEffect, useState } from 'react';
import WPAPI from 'wpapi';
import Content from './layouts/Content';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import FormikControl from './formik/FormikControl';
import * as Yup from 'yup';
import parse from 'react-html-parser';
import Loader from 'react-loader-spinner';
import $ from 'jquery';

function DoAjax() {
  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(false);

  let newPostData = {
    title: 'POST VIA JQUERY AJAX, WP APP PASSWORD & REACT - 1',
    content:
      'If this is successful, that means we should be able to perform WP Ajax',
    status: 'publish',
  };

  useEffect(() => {
    // WP APP PASSWORLD FOR http://localhost:10004/
    const userName = 'cgteam';
    const applicationPassword = '8gLw rmzE hQhZ av4L 1ljg x119';

    // WP APP PASSWORLD FOR https://digitalsupportstaff.com
    // const userName = 'cgteam';
    // const applicationPassword = 'hUoV 8WCW Dllz 4rP4 BlEo Ip27';

    const token = btoa(userName + ':' + applicationPassword);

    const fetchPosts = async () => {
      await $.ajax({
        beforeSend: (xhr) => {
          xhr.setRequestHeader('Authorization', 'Basic ' + token);
        },
        url: selflistData.root_url + '/wp-json/wp/v2/posts',
        // url: 'https://digitalsupportstaff.com/wp-json/wp/v2/posts',
        async: true,
        type: 'POST',
        data: newPostData,
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
    <div>
      <h1>Running DoAjax !!</h1>
    </div>
  );
}

export default DoAjax;

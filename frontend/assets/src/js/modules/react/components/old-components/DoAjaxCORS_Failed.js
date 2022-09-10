import React, { useEffect, useState } from 'react';
import Content from './layouts/Content';
import { Formik, Form } from 'formik';
import FormikControl from './formik/FormikControl';
import * as Yup from 'yup';
import parse from 'react-html-parser';
import Loader from 'react-loader-spinner';
import $ from 'jquery';

function DoAjax() {
  // const [posts, setPosts] = useState([]);
  // const [isPending, setIsPending] = useState(false);
  // const postId = 465;
  const ajaxFunction = 'test_wp_ajax_function';
  const ajaxUrl = 'https://digitalsupportstaff.com/wp-admin/admin-ajax.php';
  // console.log(selflistData.ajax_url);

  useEffect(() => {
    // WP APP PASSWORLD FOR http://localhost:10004/
    // const userName = 'cgteam';
    // const applicationPassword = '8gLw rmzE hQhZ av4L 1ljg x119';
    // const token = btoa(userName + ':' + applicationPassword);

    // WP APP PASSWORLD FOR https://digitalsupportstaff.com
    // const userName = 'cgteam';
    // const applicationPassword = 'hUoV 8WCW Dllz 4rP4 BlEo Ip27';

    let newPostData = {
      title: 'POST VIA JQUERY AJAX, WP AJAX W/ PHP FUNCTION & REACT - 5',
      content: 'This is the first try ... content -1',
      status: 'publish',
    };

    const fetchPosts = async () => {
      await $.ajax({
        // beforeSend: (xhr) => {
        //   xhr.setRequestHeader('Authorization', 'Basic ' + token);
        // },
        // url: selflistData.ajax_url,
        url: ajaxUrl,
        crossDomain: true,
        type: 'post',
        data: {
          action: ajaxFunction,
          newPostData,
        },
      })
        .done((res) => {
          console.log(res);
          console.log('Ajax with WP Ajax PHP function Success!');
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

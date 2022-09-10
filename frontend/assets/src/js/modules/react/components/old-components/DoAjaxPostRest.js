import React, { useEffect, useState } from 'react';
import WPAPI from 'wpapi';
import Content from '../components/layouts/Content';
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
    title: 'POST VIA JQUERY AJAX, WP-NONCE & REACT - 1',
    content: 'This is the first try ... content -1',
    status: 'publish',
  };

  useEffect(() => {
    // const contentBox = $('.content');
    // contentBox.css('border', '1rem dotted red');
    const fetchPosts = async () => {
      await $.ajax({
        beforeSend: (xhr) => {
          xhr.setRequestHeader('X-WP-Nonce', selflistData.nonce);
        },
        url: selflistData.root_url + '/wp-json/wp/v2/posts',
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

import React, { useEffect, useState } from 'react';
import Content from './layouts/Content';
import { Formik, Form } from 'formik';
import FormikControl from './formik/FormikControl';
import * as Yup from 'yup';
import parse from 'react-html-parser';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';
import $ from 'jquery';

function DoAjax() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const ajaxFunction = 'test_wp_ajax_function';

  const addPost = async () => {
    let newPostData = {
      title,
      content,
      status: 'publish',
    };

    await $.ajax({
      url: selflistData.ajax_url,
      type: 'post',
      data: {
        action: ajaxFunction,
        newPostData,
      },
    })
      .done((res) => {
        console.log(res);
        console.log('Ajax with WP Ajax PHP function Success!');
        window.location.reload();
      })
      .fail((res) => {
        console.log('Ajax Failed');
        console.log(res);
      });
  };

  return (
    <div>
      <input
        className="form-control mb-2"
        type="text"
        name="title"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="form-control mb-2"
        name="content"
        id="content"
        cols="30"
        rows="10"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button className="btn btn-primary" onClick={addPost}>
        Add Post
      </button>
    </div>
  );
}

export default DoAjax;

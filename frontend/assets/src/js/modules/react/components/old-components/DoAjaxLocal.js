import React, { useEffect, useState } from 'react';
import $ from 'jquery';

function DoAjax() {
  const ajaxFunction = 'test_wp_ajax_function';
  const postId = 465;

  useEffect(() => {
    const fetchPosts = () => {
      $.ajax({
        url: selflistData.ajax_url,
        type: 'post',
        data: {
          action: ajaxFunction,
          post_id: postId,
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
  return <div>Running DoAjax !!</div>;
}

export default DoAjax;

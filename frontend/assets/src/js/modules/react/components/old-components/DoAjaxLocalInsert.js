import React, { useEffect } from 'react';
import $ from 'jquery';

function DoAjax() {
  const ajaxFunction = 'test_wp_ajax_function';

  useEffect(() => {
    let newPostData = {
      title: 'POST VIA JQUERY AJAX, WP AJAX W/ PHP FUNCTION & REACT - 2',
      content: 'This is the first try ... content -1',
      status: 'publish',
    };

    const fetchPosts = () => {
      $.ajax({
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

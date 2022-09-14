import React, { useEffect } from 'react';
import $ from 'jquery';

function DirectMessageSearch() {
  useEffect(() => {
    const searchInput = $('.dm-search-input');
    // console.log('SEARCH INPUT: ', searchInput);
    searchInput.on('keyup', searchHandler);
  }, []);

  const searchHandler = (e) => {
    // console.log('Input Value: ', e.target.value);

    // SETTING SEARCH INPUT TEXT TO LOWER CASE
    const inputText = e.target.value.toLowerCase();
    // console.log('AFTER LOWER CASE: ', inputText);
    // COLLECTING DATA CARDS
    const cards = $('.ce-chat-card');
    // console.log('Card Element: ', cards);

    cards.each(function (i, elm) {
      // console.log('ELM DM MOOSE', $(elm).parent().parent());
      const mainParentDiv = $(elm).parent().parent();

      const postContent = $(elm)
        .find('.ce-chat-title-text div')
        .text()
        .toLowerCase();

      if (postContent.indexOf(inputText) !== -1) {
        $(mainParentDiv).removeClass('d-none');
        // $(elm).removeClass('d-none');
      } else {
        setTimeout(() => {
          $(mainParentDiv).addClass('d-none');
          // $(elm).addClass('d-none');
        }, 500);
      }
    });
  };

  return (
    <div>
      <input
        id="dm-search-input"
        placeholder="Search..."
        className="form-control dm-search-input"
      />
    </div>
  );
}

export default DirectMessageSearch;

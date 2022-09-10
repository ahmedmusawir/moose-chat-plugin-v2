import $ from 'jquery';

class VanillaJavascriptTest {
  constructor() {
    // COLLECTING ELEMENTS
    this.getDataBtn = $('#dm-search-input');
    console.log('DM SEARCH ELEMENT', this.getDataBtn);
    this.btn = $('#BUTTON');
    console.log('THE BUTTON', this.btn);

    this.init();
    this.setEvents();
  }

  init = () => {
    console.info('This is from React Based Plugin Framework');
  };

  setEvents = () => {
    // this.btn.on('click', this.displayDataHandler);
    // this.searchInput.on('keyup', this.searchHandler);
    // this.getDataBtn.on('click', this.displayDataHandler);
  };

  searchHandler = (e) => {
    console.log('You Typed: ', e.target.value);
  };

  displayDataHandler = () => {
    console.log(
      'You clicked the Body ... test successful for Vanilla JS! [REACT BASED WP PLUGIN]'
    );
  };
}

export default VanillaJavascriptTest;

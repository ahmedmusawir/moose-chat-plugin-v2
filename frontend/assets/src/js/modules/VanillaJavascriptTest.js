import $ from 'jquery';

class VanillaJavascriptTest {
  constructor() {
    // COLLECTING ELEMENTS
    this.getDataBtn = $('body');

    this.init();
    this.setEvents();
  }

  init = () => {
    console.info('This is from React Based Plugin Framework');
  };

  setEvents = () => {
    this.getDataBtn.on('click', this.displayDataHandler);
  };

  displayDataHandler = () => {
    console.log(
      'You clicked the Body ... test successful for Vanilla JS! [REACT BASED WP PLUGIN]'
    );
  };
}

export default VanillaJavascriptTest;

import $ from 'jquery';
import JlightCafeMenu from './JlightCafeMenu';
class App {
  constructor() {
    this.init();
  }

  init = () => {
    console.info('App Initialized ON THE WP FRONTEND');
    // COMMISSION CALCULATOR MODULE LOADED
    new JlightCafeMenu();

    // The following is necessary when the plugin generates the View Content
    // The above line works fine with static Html page
    // $(() => {
    //   new App();
    // });
  };
}

export default App;

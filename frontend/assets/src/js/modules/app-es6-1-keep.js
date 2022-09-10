class App {
  constructor() {
    // this.el = document.querySelector( '.el' );
    // this.listeners();
    // alert('working');

    this.init();
  }

  init = () => {
    console.info('App Initialized ON THE WP FRONTEND');
    // alert('JS ES6 Loaded on the Frontend from Module Imported...!');
  };

  // listeners() {
  // 	if ( this.el ) {
  // 		this.el.addEventListener( 'click', this.elClick );
  // 	}
  // }

  // elClick( e ) {
  // 	e.target.classList.add( 'text-light-grey' );
  // 	e.target.addEventListener( 'transitionend', ( e ) => ( 'color' === e.propertyName ) ? e.target.classList.remove( 'text-light-grey' ) : '' );
  // }
}

export default App;

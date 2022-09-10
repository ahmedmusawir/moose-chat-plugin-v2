import React, { Component } from 'react';

class ReactAppThemeOne extends React.Component {
  handleClick(e) {
    console.log('Running React App Theme 1');
    // alert('Running React App 1');
  }

  render() {
    return (
      <div className="app-content container">
        <h1 className="jumbotron">React App Theme 1 Works!</h1>
        <article>
          <h3>This is coming from OOP PHP theme</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            eos fugiat vel necessitatibus dolores molestiae quas, praesentium
            similique, est minima consequatur sit aspernatur nostrum nulla et
            maxime maiores distinctio possimus!
          </p>
          <button className="btn btn-danger" onClick={this.handleClick}>
            Click Works!
          </button>
        </article>
      </div>
    );
  }
}

export default ReactAppThemeOne;

/**
 * PUBLIC MAIN SCRIPT
 */
import ReactDOM from 'react-dom';
import React from 'react';
import MooseChat from './react/MooseChat';
import VanillaJavascriptTest from './VanillaJavascriptTest';

class App {
  constructor() {
    // console.info('ES8 REACT PLUGIN APP!');
    // LUNCHING MOOSE CHAT V1
    const mooseChatV2 = document.getElementById('MOOSE-CHAT-V2');
    if (mooseChatV2) {
      ReactDOM.render(<MooseChat />, mooseChatV2);
    }

    // VENILLA JAVASCRIPT OR JQUERY
    // new VanillaJavascriptTest();
  }
}

export default App;

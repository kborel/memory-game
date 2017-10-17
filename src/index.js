import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #root { 
    height: 100%;
  }

  html {
    font-size: calc(0.6em + 1vw);
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

if(module.hot) {
  module.hot.accept("./App", () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>
      , document.getElementById('root'));
  });
}

registerServiceWorker();

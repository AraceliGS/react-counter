import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppEs from './AppEs';
import Mapp from './components/Mapp.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)



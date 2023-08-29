import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/Store'; 
import reportWebVitals from './reportWebVitals';
import Weather from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <div className='App'> <Weather/></div>
  </Provider>
);
reportWebVitals();

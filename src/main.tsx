import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import '@sweetalert2/theme-dark/dark.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/react-store/'>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// import NavBar from './components/NavBar';
// import Hero from './components/Hero';
// import Footer from './components/Footer';

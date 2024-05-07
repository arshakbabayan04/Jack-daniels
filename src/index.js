import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

import './style/reset.scss';
import './fonts/fonts.scss';
import 'aos/dist/aos.css';
import './style/index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
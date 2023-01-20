import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Foot from './Foot';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />      
    <Foot /> 
  </React.StrictMode>
);

reportWebVitals();

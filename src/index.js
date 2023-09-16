import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import { App } from 'components/HTTPReqAbort';
// import { App } from 'components/HTTPReqAbortOnEvent';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

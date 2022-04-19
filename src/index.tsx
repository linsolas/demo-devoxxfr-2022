// import { createRoot } from 'react-dom/client';
import { App } from './App';
import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode><App /></React.StrictMode>,
  document.getElementById('root')
);

// const root = createRoot(document.querySelector('#root')!);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

import { createRoot } from 'react-dom/client';
import { App } from './App';
import React from 'react';
import './index.scss';

const root = createRoot(document.querySelector('#root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './router/router';
import { DataContext } from './shared/components/ContextComponent';
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <React.StrictMode>
      <RouterProvider router={Router} />
    </React.StrictMode>
  </>
);
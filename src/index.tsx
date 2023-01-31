import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Router from './router/router';
import OpenModal from './shared/components/open-modal';
import { title } from 'process';
import { useState } from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <>

    <RouterProvider router={Router} />
  </>
);
import React from 'react';
//PAGE IMPORTS
import { Home } from './pages/home';
import { About } from './pages/about';

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'about',
    element: <About />
  }
];

export default routes;

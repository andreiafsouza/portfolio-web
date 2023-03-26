import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/home';
import { Portfolio } from '../pages/portfolio';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio/:id" element={<Portfolio />} />
    </Routes>
  );
}

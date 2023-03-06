import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/home';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

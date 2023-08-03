import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { Portfolio } from '../pages/portfolio';
import LoadingSpinner from './LoadingSpinner/index';

export function Router() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:id?" element={<Portfolio />} />
      </Routes>
    </Suspense>
  );
}

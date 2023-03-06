import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';

export const DefaultLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

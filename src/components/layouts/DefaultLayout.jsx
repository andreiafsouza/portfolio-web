import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { Header } from '../Header';

export const DefaultLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/' && <Header />}
      <Outlet />
    </>
  );
};

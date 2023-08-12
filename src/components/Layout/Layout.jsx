import React from 'react';
import Navigation from 'components/Navigation/Navigation';
import Loader from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  return (
     <Suspense fallback={<Loader />}>
      <Navigation />
     <Outlet />
     </Suspense>
    
      
    
  )
}

export default Layout;

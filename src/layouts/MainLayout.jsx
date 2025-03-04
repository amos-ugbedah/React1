import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Ensure the path is correct

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This will render the child routes */}
    </div>
  );
};

export default MainLayout;

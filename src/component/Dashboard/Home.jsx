import React, { useEffect, useState } from 'react';
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import AllProperty from './AllProperty';
import CreateProperty from './CreateProperty'



const HomePage = () => {
  const navigate = useNavigate() 
  let token = localStorage.getItem('token')
  useEffect(() => {
    if (!token) navigate('/login')
  }, [])

  return (
    <div className="container mx-auto mt-4">

      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        {/* Left section - Company name */}
        <div className="flex items-center">
          <div className="text-lg font-bold">ABC real Estates</div>
        </div>

        {/* Right section - Menu icon and Logout button */}
        <div className="flex items-center gap-5">
          {/* Menu icon */}
          <Link
            to={'/update-property'}>
            Create Property
          </Link>

          <Link
            to={'/my-property'}>
            My Properties
          </Link>

          {/* Logout button */}
          <button
            // onClick={onLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Logout
          </button>
        </div>
      </div>

      <Outlet />
      
    </div>
  );
};

export default HomePage;
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './component/user/SignUp';
import Signin from './component/user/Signin';
import ForgotPassword from './component/user/ForgotPassword';
import ResetPassword from './component/user/ResetPassword';
import ActivationPage from './component/user/ActivationPage';
import Dashboard from './component/url/Dashboard';
import GenerateUrls from './component/url/GenerateUrls';
import ViewUrls from './component/url/ViewUrls';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/forgot_password' element={<ForgotPassword />} />
          <Route path='/reset_password/:token' element={<ResetPassword />} />
          <Route path='/activation_page/:token' element={<ActivationPage />} />
          <Route path='/dashboard/:id' element={<Dashboard />} />
          <Route path='/generate_url/:id' element={<GenerateUrls />} />
          <Route path='/view_url/:id' element={<ViewUrls />} />
          <Route path="/" element={<Navigate to="/signin" replace />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
import React from 'react'
import './App.css'
import Login from './components/login/Login'
import Index from './components/Index'
import Register from './components/login/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BillingTable from './components/billing/BillingTable'
import ListAllStock from './components/stock/ListAllStock'
import StockDetail from './components/stock/StockDetail'
import AddStock from './components/stock/AddStock'
import CustOrder from './components/billing/CustOrder'
import Verify from './components/login/Verify'
import ForgetPassword from './components/login/ForgetPassword'
import PasswordReset from './components/login/PasswordReset'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} >
            {/* Nested routes */}
            <Route path='/bill' element={<BillingTable />} />
            <Route path='/all-item' element={<ListAllStock />} />
            <Route path='/' element={<StockDetail />} />
            <Route path='/add-stock' element={<AddStock />} />
            <Route path='/orders' element={<CustOrder />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/verify/:token' element={<Verify />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/password-reset/:resetToken' element={<PasswordReset />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
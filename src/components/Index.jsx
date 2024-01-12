import React from 'react'
import NavIndex from './navBar/NavIndex'
import BillingTable from './billing/BillingTable'
import ListAllStock from './stock/ListAllStock'
import StockDetail from './stock/StockDetail'
import AddStock from './stock/AddStock'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Index() {
  return (
    <div className='app' style={{display:'flex'}}>
      {/* <Login /> */}
    <BrowserRouter>
    <NavIndex />
     <Routes>
      <Route path='/bill' element={<BillingTable />} />
      <Route path='/all-item' element={<ListAllStock />} />
      <Route path='/' element={<StockDetail />} />
      <Route path='/add-stock' element={<AddStock />} />
     </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Index
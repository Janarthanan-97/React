import React from 'react'
import './App.css';
import Cards from './component/Cards'

function App() {
  return (
    <div className="container">
    <div className='cardContainer'>
    <Cards 
    title = "FREE"
    secondTitle = "$0/month"
    user = {["Single user", true]}
    storage = {["50 GB storage", true]}
    publicProject = {["Unlimitted public project", true]}
    access = {["Community access", true]}
    privateProject = {["Unlimitted private project", false]}
    support = {["Dedicated phone support", false]}
    domain = {["Free subdomain", false]}
    reports = {["Monthly status report"]}
     />

     <Cards 
     title = "PLUS"
     secondTitle = "$9/month"
     user = {["5 user", true]}
     storage = {["50 GB storage", true]}
     publicProject = {["Unlimitted public project", true]}
     access = {["Community access", true]}
     privateProject = {["Unlimitted private project", true]}
     support = {["Dedicated phone support", true]}
     domain = {["Free subdomain", true]}
     reports = {["Monthly status report", false]}
     />

<Cards 
     title = "PRO"
     secondTitle = "$49/month"
     user = {["Unlimited user", true]}
     storage = {["50 GB storage", true]}
     publicProject = {["Unlimitted public project", true]}
     access = {["Community access", true]}
     privateProject = {["Unlimitted private project", true]}
     support = {["Dedicated phone support", true]}
     domain = {["Free subdomain", true]}
     reports = {["Monthly status report", true]}
     />

    </div>
    </div>
  )
}

export default App
import { useState } from 'react'

import './App.css'
import NavBar from './components/navbar/navBar'
import Welcome from './components/welcome/welcome'
import Services from "./components/services/services"
import Transactions from "./components/transactions/transactions"
import Footer from "./components/Footer/footer"

const App=()=>{
  

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <NavBar/>
        <Welcome/>
      </div>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App

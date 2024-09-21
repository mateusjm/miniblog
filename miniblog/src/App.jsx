import './App.css'
import { useState } from 'react'

// CSS
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
        <div className='container'>
          <Outlet/>
        </div>
      <Footer/>
    </>
  )
}

export default App

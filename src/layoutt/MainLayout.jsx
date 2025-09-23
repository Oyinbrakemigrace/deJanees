import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <section className=' min-h-screen'>
        <Outlet />
      </section>
      
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default MainLayout

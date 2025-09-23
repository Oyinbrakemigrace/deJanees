import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
    const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])



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

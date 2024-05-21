import { useState } from 'react'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import AboutUs from './components/about-us/AboutUs'
import NavBar from './components/navbar/NavBar'
import ContactUs from './components/contact-us/ContactUs'
import Teams from './components/teams/Teams'
import { Outlet } from 'react-router'

function App() {
 
  return (
  <div className=' text-2xl w-full  h-screen text-white'>

      <div className='w-full block relative '>
      <NavBar id= {"top"} />

      <main className='min-h-screen'>
        <Outlet/>
      </main>

      <Footer id= {"footer"}/>
     
      </div>
    
   
   
   
  </div>
  )
}

export default App

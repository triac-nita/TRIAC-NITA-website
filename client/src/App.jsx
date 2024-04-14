import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import AboutUs from './components/about-us/AboutUs'


function App() {
 
  return (
  <div className=' text-2xl w-full h-screen bg-black text-white'>
    <NavBar />
    <Hero/>
    <AboutUs/>
    <Footer/>
  </div>
  )
}

export default App

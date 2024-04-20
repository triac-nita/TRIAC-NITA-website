import { useState } from 'react'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import AboutUs from './components/about-us/AboutUs'
import NavBar from './components/navbar/NavBar'
import ContactUs from './components/contact-us/ContactUs'
import Teams from './components/teams/Teams'


function App() {
 
  return (
  <div className=' text-2xl w-full h-screen bg-black text-white'>

    <NavBar id= {"top"} />
    <Hero id= {"hero"}/>
    <AboutUs id= {"about-us"}/>
    <Teams id={"teams"} />
    <ContactUs id= {"contact-us"} />
    <Footer id= {"footer"}/>
  </div>
  )
}

export default App

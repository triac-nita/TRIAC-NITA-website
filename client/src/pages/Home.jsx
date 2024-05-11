import React from 'react'
import Hero from '../components/hero/Hero'
import AboutUs from '../components/about-us/AboutUs'
import Teams from '../components/teams/Teams'
import ContactUs from '../components/contact-us/ContactUs'
import Footer from '../components/footer/Footer'

const Home = () => {
    return (
        <div className='text-2xl w-full bg-transparent min-h-screen text-white'>
            <div className='home-content'>
                <Hero id={"hero"} />
                <AboutUs id={"about-us"} />
                <Teams id={"teams"} />
                <ContactUs id={"contact-us"} />

            </div>
        </div>
    )
}

export default Home

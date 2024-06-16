import React from 'react'
import Hero from '../components/hero/Hero'
import AboutUs from '../components/about-us/AboutUs'
import Teams from '../components/teams/Teams'

import ClubActivities from '../components/club-activity/ClubActivities'
import Contact from '../components/contact-us/Contact'

const Home = () => {
    return (
        <div className='text-2xl w-full 
        bg-transparent min-h-screen text-white'>
            <div className='home-content '>
                <Hero id={"hero"} />
                <AboutUs id={"about-us"} />
                <ClubActivities id= {"#"} />
                <Teams id={"teams"} />
                <Contact id={"contact-us"} />

            </div>
        </div>
    )
}

export default Home

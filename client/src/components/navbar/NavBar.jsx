import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import navbaritems from '../../lib/navbar'
import Sidebar from './Sidebar'
import { Camera, Menu, X } from 'lucide-react';
import {Link} from 'react-scroll'

const NavBar = ({id}) =>{

  const [open, setOpen]= useState(false)

  const handleScroll= ()=>{
    const aboutUsSection = document.getElementById('about-us');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div id= {id} >

      <header className="bg-gray-900 text-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-10 p-1 justify-between">

            {/* logo */}
            <div className="flex md:flex md:items-center md:gap-12">
              <a className=" text-gray-600" href="/">
                <span className="sr-only">Home</span>
                <img
                  className=' border-none rounded'
                  height={120}
                  width={120}
                  src={logo} alt="Logo" />
              </a>
            </div>

            <div className="flex  relative top-3 md:items-center md:gap-12">
              {/* Desktop view---- */}
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex flex-wrap items-center gap-6 text-sm">


                  {
                    navbaritems.map(({id, name, url, scrollId}) => {
                      return <li key={id}>

                        <Link


                        href={url}                       
                        to={scrollId ? scrollId : url}
                        smooth
                        duration={700}
                          className='text-gray-400  text-xl transition hover:text-gray-500/75'
                        >
                          {name}
                        </Link>

                      </li>
                    })
                  }
                  </ul>
              </nav>

              {/* mobile view */}

              
              <Sidebar open= {open} setOpen= {setOpen} />

      
            </div>

            <div
            onClick={() => setOpen(prev => !prev)}
            className="block md:hidden fixed top-5 right-5">
           
            <button>
              { open ? <X 
        size={30}
       className= {`cursor-pointer transition-transform
         duration-500 ease-in-out ${open ? "" : "rotate-180"}`}
        
       /> : <Menu size={30}

       />}
            </button>
          </div>
          </div>
        </div>
      </header>

    </div>
  )
}

export default NavBar

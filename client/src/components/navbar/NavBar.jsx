import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import navbaritems from '../../lib/navbar'
import Sidebar from './Sidebar'
import { Camera, Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const NavBar = ({ id }) => {

  const [open, setOpen] = useState(false)

  const handleScroll = () => {
    const aboutUsSection = document.getElementById('about-us');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div id={id} >

      <header className="shadow-md shadow-slate-900
       text-gray-100 bg-zinc-900">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center p-2 justify-between">

            {/* logo */}
            <div className="flex md:items-center md:gap-12">
              <a className=" text-gray-600" href="/">
                <span className="sr-only">Home</span>
                {/* <img
                  className=' border-none rounded'
                  height={120}
                  width={120}
                  src={logo} alt="Logo" /> */}
                <span className=' font-extrabold text-2xl leading-tight'>TRIAC</span>
              </a>
            </div>

            <div className="flex  relative md:items-center md:gap-12">
              {/* Desktop view---- */}
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex flex-wrap items-center gap-6 text-sm">


                  {
                    navbaritems.map(({ id, name, url, scrollId }) => {

                      return <li key={id}>

                        {(url === '#teams' ||
                          url === '#contact-us' || url === '#about-us') ? <Link
                            href={url}
                            to={scrollId ? scrollId : url}
                            smooth
                            duration={700}
                            className='text-gray-400  text-xl transition hover:text-gray-500/75'
                          >
                          {name}
                        </Link> : <NavLink
                          to={url}
                          className={`text-gray-400  text-xl transition hover:text-gray-500/75`}

                        >
                          {name}
                        </NavLink>}



                      </li>
                    })
                  }
                </ul>
              </nav>

              {/* mobile view */}


              <Sidebar open={open} setOpen={setOpen} />


            </div>

            <div
              onClick={() => setOpen(prev => !prev)}
              className="block md:hidden fixed top-5 right-5">

              <button>
                {open ? <X
                  size={30}
                  className={`cursor-pointer transition-transform
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

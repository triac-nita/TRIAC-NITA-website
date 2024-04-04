import React from 'react'
import logo from './../assets/logo_without-bg.png'

import navbaritems from '../lib/navbar'


const NavBar = () =>{


  return (
    <div >

      <header className="bg-gray-900 text-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start p-2 justify-between">

            {/* logo */}
            <div className="flex md:flex md:items-center md:gap-12">
              <a className=" text-gray-600" href="/">
                <span className="sr-only">Home</span>
                <img
                  className=' border-none rounded '
                  height={100}
                  width={100}
                  src={logo} alt="Logo" />
              </a>
            </div>

            <div className="md:flex relative top-3 md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">


                  {
                    navbaritems.map((item) => {
                      return <li key={item.id}>

                        <a
                          className='text-gray-400 text-xl transition hover:text-gray-500/75'
                          href={item.url}>
                          {item.name}
                        </a>

                      </li>
                    })
                  }
                  </ul>
              </nav>
                  
      
            </div>

            <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          </div>
        </div>
      </header>

    </div>
  )
}

export default NavBar

import React from 'react'
import logo from './../assets/logo.png'
function NavBar() {


  const items= [
    {
      id:1,
    name: "Home",
    url: "/"
    },
    {
      id: 2,
      name: "Events",
      url: "/events"
    },
    {
      id: 3,
      name: "Projects",
      url: "/projects"
    },
    {
      id:4,
      name: "Blogs",
      url: "/blogs"
    },
    {
      id: 5,
      name: "About Us",
      url: "/about-us"
    },
    {
      id:6,
      name: "Contact Us",
      url: "/contact-us"
    }
  ]


  return (
    <div >
      
      <header className="bg-black text-gray-200">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">

      {/* logo */}
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <img
          className='p-3'
          height={100}
          width={100}
          src= {logo} alt="Logo" />
        </a>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">


          {
            items.map((item) => {
              return  <li key={item.id}>
                  
                    <a 
                    className='text-gray-400 text-xl transition hover:text-gray-500/75'
                    href= {item.url}>
                      {item.name}
                    </a>
  
                </li>
            })
          }



{/* 
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
            </li> */}

            {/* <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
            </li> */}
          </ul>
        </nav>



        {/* <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <a
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
              href="#"
            >
              Login
            </a>

            <div className="hidden sm:flex">
              <a
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                href="#"
              >
                Register
              </a>
            </div>
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
        </div> */}
      </div>
    </div>
  </div>
</header>

    </div>
  )
}

export default NavBar

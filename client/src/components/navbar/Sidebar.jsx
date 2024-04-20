import { ChevronLeft, X } from 'lucide-react'
import React from 'react'
import navbaritems from '../../lib/navbar'
import { Link } from 'react-scroll'

function Sidebar({ open, setOpen }) {



  return (
    <div className={` md:hidden fixed top-0 left-0 z-50 bg-gray-950  min-h-screen ${open ? " translate-x-0 " : " translate-x-[-100%]"} duration-700
    text-gray-300 px-4 overflow-hidden pt-16  shadow-xl transition w-4/5`}>

      <div className=' pb-10 border-b-2 border-b-slate-500 flex justify-between items-center'>

        <h2 className='text-2xl pl-5 '>
          TRIAC
        </h2>

        <ChevronLeft size={30}
          className={`cursor-pointer transition-transform
         duration-500 ease-in-out ${open ? "" : "rotate-180"}`}
          onClick={() => setOpen(prev => !prev)} />

        
      </div>

      <div className='mt-4 w-full flex flex-col gap-4 relative'>
        {
          navbaritems?.map(({ id, name, url, scrollId }) => {

            return <Link
              key={id}
              href={url}
              to={scrollId ? scrollId : url}
              smooth
              duration={1000}
              className={`group flex items-center text-sm  gap-3.5
                font-medium p-2 hover:bg-gray-900 pl-5
                 rounded-md`}
            >
              <div className='flex gap-2 items-center '>

              <div
                  style={{
                    transitionDelay: `${id + 2}00ms`,
                  }}
                  className= {`text-xl ${ !open && "opacity-0 translate-x-28 overflow-hidden"}`}>{name}
                  
                  </div>

              </div>
            </Link>



          })
        }
      </div>

    </div>
  )
}

export default Sidebar

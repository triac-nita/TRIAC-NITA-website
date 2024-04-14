import React from 'react'
import logo from '../../assets/FINAL LOGO.png'
import Constant from '../../data/Constant'


function AboutUs() {
  return (
    <div className='bg-gray-950 pt-5 md:p-14 text-white flex gap-5 flex-col '>
      <h2 className=' text-5xl text-center p-1 m-3 '>Who We Are</h2>
      <div className='flex flex-col md:flex-row  gap-8  items-center w-full'>
      
            {/* logo */}
            <div className="flex pt-4 pb-4  md:flex md:items-center md:gap-1">
              
                <span className="sr-only">Home</span>
                <img
                  className=' border-none rounded bg-gray-950 transition duration-300 hover:scale-110 '
                  height={400}
                  width={400}
                  src={logo} alt="Logo" />
              
            </div>

          <div className='text-xl w-full md:w-2/3 p-5 pr-3  text-gray-300'>
            {Constant.aboutus}
          </div>
          
      
      </div>
    </div>
  )
}

export default AboutUs

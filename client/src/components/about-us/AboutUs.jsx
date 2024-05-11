import React from 'react'
import logo from '../../assets/logo.png'
import Constant from '../../data/Constant'


function AboutUs({id}) {

  
  return (
    <div id= {id} className=' bg-gray-950 border-t-2 border-t-blue-950
       pt-10 md:p-14 text-white flex gap-5 flex-col'>
      <h2 className=' text-5xl text-center p-1 pt-10 '>Who We Are ?</h2>
      <div className='flex flex-col flex-wrap items-center justify-center pb-20 md:flex-row  gap-8  w-full'>
      
            {/* logo */}
            <div className="flex  pt-20 pb-20   md:flex md:items-center md:gap-1">
              
                <span className="sr-only">Home</span>
                <img
                  className=' border-none rounded bg-gray-950 transition duration-500 hover:scale-110 '
                  height={300}
                  width={300}
                  src={logo} alt="Logo" />
              
            </div>

          <div className=' text-lg flex  flex-col items-center gap-5 md:text-xl w-full md:w-2/3 pl-10 pr-3  text-gray-100 opacity-60'>
            <div>{Constant.aboutusPara1}</div>
            <div>{Constant.aboutusPara2}</div>
          </div>
          
      
      </div>
    </div>
  )
}

export default AboutUs

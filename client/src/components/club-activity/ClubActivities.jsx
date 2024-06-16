import React from 'react'
import { clubActivities } from '../../data/Constant'
const ClubActivities = ({ id }) => {
    return (
        <div id={id} className='w-full min-h-screen bg-slate-900  pt-10 md:p-14 '>
            <div className='flex items-center justify-center flex-col gap-10'>
                <div className='p-1 pt-10 flex gap-4 flex-col '>
                    <div className='text-5xl text-center'> Club Activities!</div>
                    <p className='text-lg text-center text-gray-500 leading-6'> What we Do is changing the way.</p>
                </div>
                <div className={`grid  items-center justify-center grid-cols-1
                lg:grid-cols-3 2xl:grid-cols-4 gap-6 rounded p-1`}>

                    {
                        clubActivities?.map((activity) => (

                            <div className=' border-2 border-cyan-600 shadow-lg
                            shadow-cyan-600 p-4 flex 
                           flex-col items-center justify-center 
                           rounded-[22px] max-w-sm sm:p-10 bg-zinc-900 min-h-64
                           '>
       
                               <p className='text-base sm:text-xl mt-4 mb-2 text-neutral-200'>{activity.title}</p>
                               <p className='text-sm text-center  text-neutral-400'> {activity.description}</p>
                           </div>
                        ))
                    }

                   
                </div>
            </div>
        </div>
    )
}

export default ClubActivities

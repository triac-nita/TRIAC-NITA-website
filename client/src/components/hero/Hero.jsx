import React from 'react'

function Hero() {
  return (
    <div>
      <section className="bg-gray-900 text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600
         bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        TRIAC - NITA

        <span className="sm:block text-2xl"> Transformative Reasearch and Instrumentation Advancement Club</span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Instrumentation at the forefront of Innovation
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600
           bg-transparent px-12 py-3 text-sm font-medium
            text-white hover:bg-gray-950 transition ease-linear duration-300 hover:text-white
             focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          Know more about TRIAC
        </a>

       
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero

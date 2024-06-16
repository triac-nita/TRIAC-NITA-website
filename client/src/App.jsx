import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar'
import { Outlet } from 'react-router'

function App() {
 
  return (
  <div className=' text-2xl w-full  h-screen text-white'>

      <div className='w-full'>
      <NavBar id= {"top"} />

      <main className='min-h-screen'>
        <Outlet/>
      </main>

      <Footer id= {"footer"}/>
     
      </div>
    
   
  </div>
  )
}

export default App

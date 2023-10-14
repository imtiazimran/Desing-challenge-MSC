import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <div>
    <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App

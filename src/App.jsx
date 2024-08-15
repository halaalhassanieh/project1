import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import HomePage from './Pages/HomePage/HomePage'
import Login from './Pages/LoginPage/Login'
import Dashboard from './Pages/Dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/AboutUs/About'
import AOS from 'aos'
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  return (
    <>

    <Routes>

        <Route path='/' element={<Login/>} />
        <Route path='/homePage' element={<HomePage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/about' element={<About/>}/>
        
    </Routes>
      

    </>
  )
}

export default App

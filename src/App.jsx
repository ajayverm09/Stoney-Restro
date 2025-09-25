import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Pages/About'
import Blogs from './Pages/Blogs'
import SingleBlog from './Pages/SingleBlog'
import Contact from './Pages/Contact'
import ServicePage from './Pages/ServicePage'
function App() {

  return (
    <>
      <div className='overflow-x-hidden'>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blog/:id' element={<SingleBlog/>}/>
          <Route path='/service' element={<ServicePage/>}/>
        </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
    </>
  )
}

export default App

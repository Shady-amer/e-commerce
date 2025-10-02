import React,{useEffect,useState} from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import ScaleLoader from "react-spinners/ScaleLoader"


//Component
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Gallery from './Component/Gallery/Gallery'
import Menu from "./Component/Menu/Menu"

const App = () => {
  const [Reload,setReload] = useState(0)
  useEffect(()=>{
    setReload (true)
    setTimeout(()=>{
    setReload(false)
    },500)
  },[])
   

  return (
    <>
    <BrowserRouter>
      {
      Reload ?<ScaleLoader color="#ff0a0a" className='text-center pt-80'  />: 
      <> 
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Gallery' element={<Gallery/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      </Routes>
       </> 
    }
    </BrowserRouter>
    </>
  )
}

export default App

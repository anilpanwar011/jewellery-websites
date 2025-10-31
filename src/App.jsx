import React from 'react'
import { useState } from 'react'

import './App.css'
import Header from './comman/Header'
import JewelleryNav from './comman/JewelleryNav'
import Home from './Home'
import Footer from './comman/Footer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <JewelleryNav/>
     <Home/>
    
    <Footer/>
    </>
  )
}

export default App

import React from 'react'
import './App.css'
import Mainpage from './components/Mianpage.jsx'
import Mealinfo from './components/Mealinfo.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
 

  return (
  <>
    
      <Routes>
        <Route path='/' element={<Mainpage></Mainpage>}/>
        <Route path='/:mealid'element={<Mealinfo></Mealinfo>}/>
      </Routes>
  </>
  )
}

export default App

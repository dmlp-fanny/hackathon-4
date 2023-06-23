import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import AuthorDetail from './authordetail/AuthorDetail'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from "react-router-dom"
import Homepage from './Homepage/Homepage'

function App() {
  

  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
            <Route path="/" element={ <Homepage />} />
            <Route path="/author/:author" element={ <AuthorDetail /> } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

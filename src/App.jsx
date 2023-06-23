import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import AuthorDetail from './authordetail/AuthorDetail'
import Homepage from './Homepage/Homepage'
import { BrowserRouter } from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
      <Homepage />
      <AuthorDetail />
    </BrowserRouter>
  )
}

export default App

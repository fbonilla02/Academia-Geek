import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'

export default function AppRoutes() {
  return (
    <BrowserRouter >
    <NavBar/>
    <Routes>
        <Route   path='/' element={<App />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

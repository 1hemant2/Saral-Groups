import { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertiesDetial from './pages/PropertiesDetial';
import Contact from './pages/Contact';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/properties" element={<Properties></Properties>}></Route>
          <Route path="/propertiesDetial/:id" element={<PropertiesDetial></PropertiesDetial>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

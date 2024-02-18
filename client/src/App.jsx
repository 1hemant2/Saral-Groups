import { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertiesDetial from './pages/PropertiesDetial';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/properties" element={<Properties></Properties>}></Route>
          <Route path="/propertiesDetial/:id" element={<PropertiesDetial></PropertiesDetial>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from '../pages/About';
import Home from '../pages/Home'

export default function Inmal() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path="home" element={<Home/>}></Route>
     <Route path="About" element={<About/>}></Route>
     <Route index element={<Home />}></Route>
   </Routes>
   </BrowserRouter>
  );
}


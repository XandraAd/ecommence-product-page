/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Collections from '../pages/Collections'
import Men from '../pages/Men'
import Women from '../pages/Women'
import About from '../pages/About'
import Contacts from '../pages/Contacts'
//import Cart from '../pages/Cart'



const Routing = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contacts />} />
        
    </Routes>
    </>
  )
}

export default Routing
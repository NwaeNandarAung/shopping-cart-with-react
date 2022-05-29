import React from 'react'
import Admin from '../admin/Admin'
import Home from '../../stateful/home/Home'
import { Routes, Route, NavLink } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

export default function site() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  )
}

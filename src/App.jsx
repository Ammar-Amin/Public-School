import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Root } from './components'
import { AboutUs, Academics, Admissions, ContactUs, Faculty, Home, Students } from './pages'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />}>
          <Route path='' element={<Home />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='academics' element={<Academics />} />
          <Route path='admissions' element={<Admissions />} />
          <Route path='faculty' element={<Faculty />} />
          <Route path='students' element={<Students />} />
          <Route path='contact' element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

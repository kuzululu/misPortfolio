import { useState, useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'

import RootLayout from './shared/layouts/RootLayout'
import BannerLayout from './shared/layouts/BannerLayout'
import DefaultLayout from './shared/layouts/DefaultRootLayout'
import Msgr from './shared/components/MsgrButton'

import HomePage from './pages/Home'
import Page404 from './pages/Page404'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import Coursepage from './pages/Course'

import Logo from './assets/logo/logo.png'
import AOS from 'aos'
import CoursePage from './pages/Course'

function App() {

  useEffect(()=>{

    AOS.init({
      duration: 1000
    })
  
    const Ficon = document.createElement("link")
    Ficon.rel = "icon"
    Ficon.href = Logo
    document.head.appendChild(Ficon)

    // Optional cleanup: remove it on unmount (not usually needed)
    return () =>{
      document.head.removeChild(Ficon)
    }

  }, [])

  return (
    <>
     <Msgr />

     <Routes>
      <Route element={<RootLayout />}>
        
       <Route element={<BannerLayout />}>
        <Route path='/' element={<HomePage />} />
       </Route>

       <Route element={<DefaultLayout />}>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/course' element={<CoursePage />} />
        <Route path='/contact' element={<ContactPage />} />
       </Route>

      </Route>

     <Route path='*' element={<Page404 />} />
     </Routes>
    </>
  )
}

export default App

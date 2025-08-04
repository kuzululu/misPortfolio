import { NavLink, useLocation } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import Logo from '../../assets/logo/logo.png'

import Collapse from "bootstrap/dist/js/bootstrap.bundle.min"

const Navbar = () =>{

const location = useLocation()

useEffect(()=>{
   // const NavCol = document.querySelector()
}, [location])

 return(
    <>
     <nav className="navbar navbar-expand-lg p-3 bg-dark bg-gradient sticky-top" id="navbar">
      <div className="container-fluid">

       <NavLink to='/' className='navbar-brand fw-bolder text-uppercase text-light animate__animated animate__fadeIn animate__infinite infinite'>
         <img src={ Logo } className="img-fluid position-absolute d-lg-block d-md-block d-none" id="logoNavbar" />
       </NavLink>

       <button className='navbar-toggler bg-light' type='button' data-bs-toggle='collapse' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'  data-bs-target='#navbarNav'><span className='navbar-toggler-icon'></span></button>

       <div className="collapse justify-content-start ms-lg-4 ms-md-4 navbar-collapse" id="navbarNav">
         <ul className="navbar-nav">
           
           <li className="nav-item ps-lg-4 pe-lg-4">
             <NavLink to='/' className="nav-NavLink glow-NavLink text-decoration-none text-light text-uppercase fw-bolder">Home</NavLink>
           </li>

           <li className="nav-item ps-lg-4 pe-lg-4">
             <NavLink to='/about' className="nav-NavLink glow-NavLink text-decoration-none text-light text-uppercase fw-bolder">About</NavLink>
           </li>

           <li className="nav-item ps-lg-4 pe-lg-4">
             <NavLink to='/course' className="nav-NavLink glow-NavLink text-decoration-none text-light text-uppercase fw-bolder">Course</NavLink>
           </li>

           <li className="nav-item ps-lg-4 pe-lg-4">
             <NavLink to='/contact' className="nav-NavLink glow-NavLink text-decoration-none text-light text-uppercase fw-bolder">Contact</NavLink>
           </li>

         </ul>
       </div>

      </div>
     </nav>
    </>
 )
}

export default Navbar
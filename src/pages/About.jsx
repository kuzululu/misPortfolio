import { useEffect, useState, useRef } from "react"
import { NavLink } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { Parallax } from "react-parallax"

import gal1 from "../assets/gallery/gallery-01.jpg"
import gal2 from "../assets/gallery/gallery-02.jpg"
import parallaxImg from '../assets/banner/parralax-img.jpg'

const AboutPage = () =>{
 return(
    <>
     <Parallax bgImage={ parallaxImg } strength={ 400 }>
      <div className="container-fluid mt-md-5">
        <div className="row"> 
         <div className="col-md-12 col-lg-12 p-3" id="glass">

         <div className="row">
            <div className="col-md-12 col-lg-12">
              <h1 className="text-center text-uppercase fw-bolder">About</h1><hr />
            </div>
         </div>

         <div className="row">
            <div className="col-md-6 col-lg-6 glassPage p-3">
               <h3 className="text-center">JRGG Web Design</h3>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </p>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               </p>
            </div>

            <div className="col-md-6 col-lg-6 order-md-0 mt-md-0 mt-lg-0 mt-4 order-lg-0 order-2">
               <center><img className="w-100  img-fluid" src={ gal1 } /></center>
            </div>
         </div>

         <div className="row mt-3">
            <div className="col-md-6 col-lg-6 order-md-0 mt-md-0 mt-lg-0 mt-4 order-lg-0 order-1">
               <center><img className="w-100  img-fluid" src={ gal2 } /></center>
            </div>

            <div className="col-md-6 col-lg-6 glassPage p-3">
               <h3 className="text-center">JRGG Web Design</h3>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </p>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               </p>
            </div>
         </div>

         </div>
        </div>
      </div>
     </Parallax>
    </>
 )
}

export default AboutPage
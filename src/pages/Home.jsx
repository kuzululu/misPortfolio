import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import HomeLogo from "../assets/logo/logo.png"
import about3 from '../assets/logo/about_03.jpg'

import TesdaPage from "./Tesda"
import SeniorPage from "./seniorHigh"

const HomePage = () =>{

const [loadedPage, setLoadedPage] = useState("tesda") //default page loaded

const renderPage = () =>{
    switch(loadedPage){
        case "tesda":
            return <TesdaPage />
        case "senior":
            return <SeniorPage />
        default:
            return <p>Select Page to Load</p>
    }
}

return(
    <>
    <Helmet>
        <title>MIS | Home</title>
    </Helmet>

    <section id="Home" className="mt-md-5 mt-lg-5 mt-3">
        <div className="container-fluid">
         
         <div className="row">
            <div className="col-md-12 col-lg-12">
              <h1 className="text-center text-primary fw-bolder">About</h1>
            </div>
         </div>

         <div className="row">
            <div className="col-md-12 col-lg-12">
                <h5 className="text-capitalize text-warning fw-bolder">JRGG shool sample web design.</h5>
            </div>
         </div>

        <div className="row mb-4">
          <div className="col-md-6 col-lg-6 mb-md-0 mb-4 order-md-0 order-lg-0 order-2">
            <h2>Welcome to JRGG School Sample Web Design.</h2>
            <p className="text-justify">
                JRGG School Sample Web Design. lorem ipsum amet sit de asis adset Accredited Training Programs and high standard of services.
            </p>
          </div>
          <div className="col-md-6 col-lg-6 mb-md-0 mb-4 order-md-0 order-lg-0 order-1">
            <center><img src={ HomeLogo } className="img-fluid w-25" /></center>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 col-lg-6 mb-md-0 mb-4 order-md-0 order-lg-0 order-4">
            <center><img src={ about3 } className="img-fluid w-100" /></center>
          </div>
          <div className="col-md-6 col-lg-6 mb-md-0 mb-4 order-md-0 order-lg-0 order-3">
            <h5 className="text-capitalize text-warning fw-bolder">JRGG shool sample web design.</h5>
            <h2 className="text-muted">Congratulations</h2>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
        </div>

        <div className="row mt-md-5 mt-lg-5 mt-3 mb-4">
          <div className="col-md-12 col-lg-12">
            <h2 className="text-center fw-bolder">JRGG School Sample Web Design</h2>
          </div>

          <div className="col-md-6 col-lg-6">
            <p className="text-center">
              <button className="btn btn-outline-primary btn-lg" onClick={ () => setLoadedPage("tesda") }>Tesda</button>
            </p>
          </div>
          <div className="col-md-6 col-lg-6">
            <p className="text-center">
              <button className="btn btn-outline-primary btn-lg" onClick={ () => setLoadedPage("senior") }>Senior High School</button>
            </p>
          </div>
        </div>

         {/* Dynamic AJAX-like content loader */}
        <div className="row mt-3">
          { renderPage() }
        </div>

        </div>
    </section>
    </>
)
}

export default HomePage
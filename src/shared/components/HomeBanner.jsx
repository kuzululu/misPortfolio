import { useEffect, useState, useRef } from "react"

import b1 from "../../assets/banner/banner-01.jpg"
import b2 from "../../assets/banner/banner-02.jpg"
import b3 from "../../assets/banner/banner-03.jpg"

const BannerHome = () =>{
 return(
  <>
    <section>
        <div className="carousel slide carousel-fade carousel-dark position-relative" data-bs-ride="carousel" id="carouselHome">
            
         <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="0" aria-label="Slide 1" className="active"></button>
            <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
         <div className="carousel-item active" data-bs-interval="3000">
            <img src={ b1 } className="w-100 img-fluid" />
         </div>

         <div className="carousel-item" data-bs-interval="3000">
            <img src={ b2 } className="w-100 img-fluid" />
         </div>

         <div className="carousel-item" data-bs-interval="3000">
            <img src={ b3 } className="w-100 img-fluid" />
         </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselHome" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselHome" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>

        </div>
    </section>
  </>
 )
}

export default BannerHome
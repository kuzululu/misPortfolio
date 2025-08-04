
const DefaultLayout = () =>{
 return(
    <>
    <footer className="bg-dark text-center text-lg-start">
  {/* <!-- Grid container --> */}
  <div className="container p-4 text-white">
    {/* <!--Grid row--> */}
    <div className="row">
      {/* <!--Grid column--> */}
      <div className="col-md-4 mb-4 mb-md-0">
        <h5 className="text-uppercase">About US</h5>

        <p className="text-justify">
          JRGG Sample Web Design. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqud. <span className="fw-bolder text-decoration-underline">ADSET</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      {/* <!--Grid column--> */}
      <div className="col-md-4"></div>
      {/* <!--Grid column--> */}
      <div className="col-md-4 mb-4 mb-md-0">
        <h5 className="text-uppercase">Contact Details</h5>

        <p><i className="fa fa-globe" aria-hidden="true"></i> <a href="https://moversinternationalschool.blogspot.com/" target="_blank" className="text-white text-decoration-none">website: caittechsorf.com</a></p>
        <p><i className="fa fa-phone" aria-hidden="true"></i> <a className="text-white text-decoration-none" href="tel:09452869822">09452869822</a> /</p>  
       
      </div>
      {/* <!--Grid column--> */}
    </div>
    {/* <!--Grid row--> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Grid container --> */}
  <div className="container p-1 pb-0 text-center">
    {/* <!-- Section: Social media --> */}
    <section className="mb-2">
    <p className="text-white text-center">Click or choose one of our contacts here</p>
      {/* <!-- Facebook --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/team3nity" target="_blank" role="button"><i className="fab fa-facebook-f"></i></a>

      {/* <!-- Twitter --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="#" target="_blank" role="button"><i className="fab fa-twitter"></i></a>

      {/* <!-- Google --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="#" target="_blank" role="button"
        ><i className="fab fa-google"></i
      ></a>

      {/* <!-- Instagram --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="#" target="_blank" role="button"><i className="fab fa-instagram"></i></a>

      {/* <!-- Map --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="contact" role="button"
        ><i className="fa fa-map-pin" aria-hidden="true"></i
      ></a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-1 text-white">
    <span>© {new Date().getFullYear()} Copyright:
    <a href="http://www.moversinstitute.com/" target="_blank" className="text-white text-decoration-none">JRGG Sample Web Designer</a> |
    Contact Web Designer <a href="https://www.facebook.com/jeffronald.gamasan" target="_blank" className="text-decoration-none text-white animated flash slower infinite">click here</a> |
    <a className="text-white text-decoration-none" target="_blank" href="https://getbootstrap.com/">Powered by bootstrap 5</a></span>
  </div>
  {/* <!-- Copyright --> */}
</footer>


    </>
 )
}

export default DefaultLayout
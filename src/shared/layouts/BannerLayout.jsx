import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/HomeBanner'

const BannerLayout = () =>{
    return(
        <>
         <Navbar />
         <Banner />
         <Outlet />
         {/* <Footer /> */}
        </>
    )
}

export default BannerLayout

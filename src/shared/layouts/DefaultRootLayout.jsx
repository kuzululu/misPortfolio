import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DefaultLayout = () =>{
    return(
        <>
          <Navbar />
         <Outlet />
         <Footer />
        </>
    )
}

export default DefaultLayout

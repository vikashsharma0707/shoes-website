import { Outlet } from "react-router-dom";
import Topmenu from "./Components/Topmenu";
import Footer from "./Components/Footer";



const Layout=()=>{
    return(
        <>
         <Topmenu/>

         <Outlet/>

         <Footer/>
        </>
    )
}

export default Layout;
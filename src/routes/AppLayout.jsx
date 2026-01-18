// react imports
import { Outlet, useLocation } from "react-router-dom"
import Container from "../components/shared/SiteWrapper"
// ui elements
import NavBar from "../components/shared/NavBar"
import { useContext } from "react";
import { SiteContext } from "../App";

export default function Layout() {
    const {mode, userdata} = useContext(SiteContext)
    const pizzaLikedNum = userdata["likedPizzasId"].length
    const pizzaInCartNum = userdata["pizzaInCartId"].length

    const location = useLocation()
    return (  
                <>
                    <NavBar mode={mode} 
                    current={location.pathname} 
                    pizzaLikedNum={pizzaLikedNum}
                    pizzaInCartNum={pizzaInCartNum}
                    />
                    <Outlet />
                </>
        
    )
}
// react imports
import { Outlet, useLocation } from "react-router-dom"
import Container from "../components/shared/SiteWrapper"
// ui elements
import NavBar from "../components/shared/NavBar"
import { useContext } from "react";
import { siteContext } from "../App";

export default function Layout() {
    const {mode} = useContext(siteContext)
    const location = useLocation()
    return (  
                <Container>
                    <NavBar mode={mode} current={location.pathname}/>
                    <Outlet />
                </Container>
        
    )
}
// react imports
import { Outlet } from "react-router-dom"
import Container from "../components/shared/Container"
// ui elements
import NavBar from "../components/shared/NavBar"
import { useContext } from "react";
import { siteContext } from "../App";

export default function Layout() {
    const {mode} = useContext(siteContext)
    return (  
                <Container>
                    <NavBar mode={mode}/>
                    <Outlet />
                </Container>
        
    )
}
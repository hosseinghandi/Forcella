import { Outlet } from "react-router-dom"
import NavBar from "../components/shared/NavBar"
// components
// import NavLayout from "../shared/Nav/NavLayout"
export default function Layout() {
    return (
        <>
                <NavBar/>
                <Outlet />
        </>
        
    )
}
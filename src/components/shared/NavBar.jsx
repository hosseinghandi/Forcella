import { Link } from "react-router-dom";
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

export default function NavBar({mode}) {

  return (
    <nav className="fixed left-0 bottom-5 w-[100%] 
    px-global-padding-x-mobile z-[999]">
      <div className="flex flex-row items-center 
      justify-around h-[50px] bg-dark rounded-[25px] ">

        <Link to="/applayout/menu">
        <LocalPizzaIcon 
        sx={{
          color : "white" 
        }}/></Link>
        <Link to="/applayout/favorites">
        <FavoriteOutlinedIcon 
        sx={{
          color : "white" 
        }}/>
        </Link>
        <Link to="/applayout/shoppingbag">
        <ShoppingBagOutlinedIcon
        sx={{
          color : "white" 
        }}/>
        </Link>
        <Link to="/applayout/profile">
        <PersonOutlinedIcon
        sx={{
          color : "white" 
        }}/>
        </Link>
      </div>
    </nav>
  );
}

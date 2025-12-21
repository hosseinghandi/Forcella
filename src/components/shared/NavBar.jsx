import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Link to="/applayout/menu">Menu</Link>
      <Link to="/applayout/favorites">fav</Link>
      <Link to="/applayout/shoppingbag">Bag</Link>
      <Link to="/applayout/profile">Profile</Link>
    </>
  );
}

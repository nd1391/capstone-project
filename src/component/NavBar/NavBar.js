import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    //delegate to the user service
    userService.logOut();
    //update state will also cause a re-reorder
    setUser(null);
  }

  return (
    <nav>
      <Link to="/wardrobe">Wardrobe</Link>
      &nbsp; | &nbsp;
      <Link to="/outfit/new">New Outfit</Link>&nbsp;&nbsp;
      <span>Welcome, {user.name}</span>
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}

import SearchBar from "../searchbar/SearchBar"
import {Link} from "react-router-dom";

const Nav = ({onSearch}) => {
  return (
    <div>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <SearchBar onSearch={onSearch}/>
      <Link to="/">
        <button>Log out</button>
      </Link>
    </div>
  );
};

export default Nav;
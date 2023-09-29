import Button from "../button/Button";
import SearchBar from "../searchbar/SearchBar";
import "./Nav.css";

const Nav = ({onSearch}) => {
  return (
    <nav className="nav">
      <Button link="/home" text="Home"/>
      <Button link="/about" text="About"/>
      <Button link="/favorites" text="Favorites"/>
      <SearchBar onSearch={onSearch}/>
      <Button link="/" text="Log out"/>
    </nav>
  );
};

export default Nav;
import Button from "../button/Button";
import SearchBar from "../searchbar/SearchBar";
import "./Nav.css"

const Nav = ({onSearch, all}) => {
  return (
    <nav className="nav">
      <Button link="/home" text="Home" className="nav-button"/>
      <Button link="/about" text="About" className="nav-button"/>
      <Button link="/favorites" text="Favorites" className="nav-button"/>
      <img src="../img/title.png" alt="RickandMorty" className="title"/>
      <SearchBar onSearch={onSearch} all={all}/>
      <Button link="/" text="Log out" className="nav-button nav-button-out"/>
    </nav>
  );
};

export default Nav;
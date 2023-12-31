import Button from "../button/Button";
import SearchBar from "../searchbar/SearchBar";
import "./Nav.css"

const Nav = ({onSearch, all}) => {
  return (
    <nav className="nav">
      <Button link="/" text="Home" className="nav-button"/>
      <Button link="/about" text="About" className="nav-button"/>
      <Button link="/favorites" text="Favorites" className="nav-button"/>
      <img src="../img/title.png" alt="RickandMorty" className="title"/>
      <SearchBar onSearch={onSearch} all={all}/>
    </nav>
  );
};

export default Nav;
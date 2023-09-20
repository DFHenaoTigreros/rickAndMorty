import SearchBar from "../searchbar/SearchBar"

const Nav = ({onSearch}) => {
  return (
    <div>
      <SearchBar onSearch={onSearch}/>
      <button onClick={() => onSearch(Math.floor(Math.random() * 826) + 1)}>Random</button>
    </div>
  );
};

export default Nav;
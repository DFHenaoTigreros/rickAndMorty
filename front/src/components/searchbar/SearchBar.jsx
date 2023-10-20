import {useState} from "react";
import {Link} from "react-router-dom";
import "../nav/Nav";

const SearchBar = ({onSearch, all}) => {
   const [id, setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div>
         <input 
            type="search" 
            onChange={handleChange}
            value={id}  
            className="search-bar"
         />
         <Link to="/home">
            <button onClick={() => id !== "" ? onSearch(id) : onSearch()} className="nav-button">Add</button>
            <button onClick={() => onSearch(Math.floor(Math.random() * 826) + 1)} className="nav-button">Random</button>
            <button onClick={() => all()} className="nav-button">All</button>
            <button onClick={() => onSearch("clean")} className="nav-button">Clean</button>
         </Link>
      </div>
   );
};

export default SearchBar;


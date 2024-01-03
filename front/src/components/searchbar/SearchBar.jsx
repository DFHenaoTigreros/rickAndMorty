import {useState} from "react";
import {Link} from "react-router-dom";
import "../nav/Nav";
import {useDispatch, useSelector} from "react-redux";
import {clear, searchCharacters, allCharacters, addRandom, log} from "../../redux/actions/actions";
import axios from "axios";

const SearchBar = () => {
   const {characters, access} = useSelector((state) => state);

   const dispatch = useDispatch();

   const [name, setName] = useState("");

   const handleChange = (event) => {
      setName(event.target.value);
   };

   const onSearchByName = () => {
      dispatch(searchCharacters(name));
   };

   const onClear = () => {
      dispatch(clear())
   };

   const all = async () => {
      dispatch(allCharacters());
   };

   const random = async (id) => {
      try {
         const {data} = await axios(`/rickandmorty/character/${id}`);
         if (!characters.some((character) => character.id === data.id)) {
            dispatch(addRandom(data));
            setTimeout(() => {
               alert(`¡Personaje ${data.name} agregado!`);
            }, 150);
         } else {alert(`¡Personaje ${data.name} ya había sido agregado!`)}
      } catch (error) {
         alert(`¡Error al agregar personaje!`)
      };
   };

   const logOut = () => {
      dispatch(log(false));
   };

   return (
      <div>
         <input 
            type="search" 
            onChange={handleChange}
            value={name}  
            className="search-bar"
            placeholder="Search character by name"
         />
         <Link to="/">
            <button onClick={() => onSearchByName()} className="nav-button">Add</button>
            <button onClick={() => random(Math.floor(Math.random() * 826) + 1)} className="nav-button">Random</button>
            <button onClick={() => all()} className="nav-button">All</button>
            <button onClick={() => onClear()} className="nav-button">Clear</button>
         </Link>
         <Link to="/login">
            <button onClick={() => logOut()} className="nav-button nav-button-out">{access ? "Log out" : "Login"}</button>
         </Link>
      </div>
   );
};

export default SearchBar;


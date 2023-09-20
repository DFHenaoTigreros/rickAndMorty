import {useState} from "react";
import axios from "axios";
import Nav from "./components/nav/Nav"
import Cards from "./components/cards/Cards";
import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState([])

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => {
      if (!characters.some((character) => character.id === data.id)) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        alert('¡Este personaje ya se encuentra en pantalla!');
      }
    })
    .catch(() => alert('¡No hay personajes con este ID!'))
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => {
      return character.id != id;
    }))
  }

  return (
    <div className='App'>
      <Nav onSearch={onSearch}/>
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;

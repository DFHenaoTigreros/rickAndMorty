import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const {id} = useParams()

  const [character, setCharacter] = useState({})

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
    .then(({data}) => {
      if (data.name) {
         setCharacter(data);
      } else {
         alert('No hay personajes con ese ID');
      }
   });
   return setCharacter({});
  }, [id]);

  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <h3>STATUS: {character.status}</h3>
      <h3>SPECIE: {character.species}</h3>
      <h3>TYPE: {character.type}</h3>
      <h3>GENDER: {character.gender}</h3>
      <h3>ORIGIN: {character.origin?.name}</h3>
      <h3>LOCATION: {character.location?.name}</h3>
      <h3>EPISODE: {character.episode}</h3>
    </div>
  );
};

export default Detail;
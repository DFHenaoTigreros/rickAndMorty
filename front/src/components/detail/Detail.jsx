import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import "./Detail.css"

const Detail = () => {
  const {id} = useParams()

  const [character, setCharacter] = useState({})

  useEffect(() => {
    axios(`/rickandmorty/character/${id}`)
    .then(({data}) => {
      if (data.name) {
         setCharacter(data);
      } else {
         alert('No hay personajes con ese ID');
      }
   });
   return setCharacter({});
  }, [id]);

  const episode = character.episode?.map((episode, i, array) => {
    if(i === array.length - 1) {
      return episode
    }
    return `${episode}, `
  })

  return (
    <div className="detail">
      <div className="right">
        <h2 className="name-detail">{character.name}</h2>
        <img className="image-detail" src={character.image} alt={character.name}/>
      </div>
      <div className="left">
        <h3 className="text">STATUS: {character.status}</h3>
        <h3 className="text">SPECIE: {character.species}</h3>
        <h3 className="text">TYPE: {character.type}</h3>
        <h3 className="text">GENDER: {character.gender}</h3>
        <h3 className="text">ORIGIN: {character.origin}</h3>
        <h3 className="text">LOCATION: {character.location}</h3>
        <h3 className="text">EPISODE: {episode}</h3>
      </div>
    </div>
  );
};

export default Detail;
import {ADD_FAV, REMOVE_FAV, ORDER, STATUS, SPECIES, GENDER, EPISODE, CHARACTERS, CLEAR, SEARCH_CHARACTERS, RANDOM, DELETE_CHARACTER, ACCESS} from "../action-types/action-types";

const initialState = {
  myFavorites: [],
  allFavorites: [],
  characters: [],
  allCharacters: [],
  access: false,
};

const reducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case ADD_FAV: 
      return {...state, myFavorites: payload, allFavorites: payload};
    case REMOVE_FAV:
      return {...state, myFavorites: payload, allFavorites: payload};
    case ORDER:
      return {...state, characters: payload === "A-Z" ? [...state.characters].sort((a, b) => a.name.localeCompare(b.name)) : [...state.characters].sort((a, b) => b.name.localeCompare(a.name))};
    case STATUS: 
      return {...state, characters: payload === "All" ? state.allCharacters : [...state.allCharacters.filter((character) => character.status === payload)]};
    case SPECIES: 
      return {...state, characters: payload === "All" ? state.allCharacters : [...state.allCharacters.filter((character) => character.species === payload)]};
    case GENDER: 
      return {...state, characters: payload === "All" ? state.allCharacters : [...state.allCharacters.filter((character) => character.gender === payload)]};
    case EPISODE: 
      return {...state, characters: payload === "All" ? state.allCharacters : [...state.allCharacters.filter((character) => character.episode.includes(payload))]};
    case CHARACTERS:
      return {...state, characters: payload, allCharacters: payload};
    case CLEAR:
      return {...state, characters: payload};
    case SEARCH_CHARACTERS:
      return {...state, characters: payload};
    case RANDOM: 
      return {...state, characters: [...state.characters, payload]};
    case DELETE_CHARACTER: 
      return {...state, characters: state.characters.filter((character) => character.id !== payload)}
    case ACCESS:
      return {...state, access: payload};
    default:
      return {...state};
  }
}

export default reducer;
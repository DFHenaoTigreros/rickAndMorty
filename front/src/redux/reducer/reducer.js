import {ADD_FAV, REMOVE_FAV, FILTER, ORDER, CHARACTERS, CLEAR, SEARCH_CHARACTERS, RANDOM} from "../action-types/action-types";

const initialState = {
  myFavorites: [],
  allFavorites: [],
  characters: [],
  allCharacters: []
};

const reducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case ADD_FAV: 
      return {...state, myFavorites: payload, allFavorites: payload};
    case REMOVE_FAV:
      return {...state, myFavorites: payload, allFavorites: payload};
    case FILTER: 
      return {...state, myFavorites: payload === "All" ? state.allFavorites : [...state.allFavorites.filter((character) => character.gender === payload)]};
    case ORDER:
      return {...state, myFavorites: payload === "Ascendente" ? [...state.myFavorites].sort((a, b) => a.id - b.id) : [...state.myFavorites].sort((a, b) => b.id - a.id)};
    case CHARACTERS:
      return {...state, characters: payload, allCharacters: payload};
    case CLEAR:
      return {...state, characters: payload};
    case SEARCH_CHARACTERS:
      return {...state, characters: payload};
    case RANDOM: 
      return {...state, characters: [...state.characters, payload]};
    default:
      return {...state};
  }
}

export default reducer;
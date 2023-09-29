import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "../action-types/action-types";

const initialState = {
  myFavorites: [],
  allFavorites: []
}

const reducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case ADD_FAV: 
      return {...state, myFavorites: [...state.allFavorites, payload], allFavorites: [...state.allFavorites, payload]};
    case REMOVE_FAV:
      return {...state, myFavorites: state.myFavorites.filter((character) => character.id != payload), allFavorites: state.myFavorites.filter((character) => character.id != payload)};
    case FILTER: 
      return {...state, myFavorites: payload === "All" ? state.allFavorites : [...state.allFavorites.filter((character) => character.gender === payload)]};
    case ORDER:
      return {...state, myFavorites: payload === "A" ? [...state.myFavorites].sort((a, b) => a.id - b.id) : [...state.myFavorites].sort((a, b) => b.id - a.id)};
    default:
      return {...state};
  }
}

export default reducer;
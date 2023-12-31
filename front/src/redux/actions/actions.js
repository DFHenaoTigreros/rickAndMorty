import axios from "axios";
import {ADD_FAV, REMOVE_FAV, ORDER, STATUS, SPECIES, GENDER, EPISODE, CHARACTERS, CLEAR, SEARCH_CHARACTERS, RANDOM, DELETE_CHARACTER} from "../action-types/action-types";

const endpoint = "http://localhost:3001/rickandmorty/";

export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post(`${endpoint}fav/`, character);
      return dispatch({type: ADD_FAV, payload: data});
    } catch (error) {
      throw Error(error.message);
    };
  };
};
export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.delete(`${endpoint}fav/${id}`);
      return dispatch({type: REMOVE_FAV, payload: data});
    } catch (error) {
      throw Error(error.message);
    };
  };
};
export const orderCards = (order) => { return {type: ORDER, payload: order} };

export const filterStatus = (status) => { return {type: STATUS, payload: status} };

export const filterSpecies = (species) => { return {type: SPECIES, payload: species} };

export const filterGender = (gender) => { return {type: GENDER, payload: gender} };

export const filterEpisode = (episode) => { return {type: EPISODE, payload: episode} };

export const allCharacters = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`${endpoint}character/`);
      return dispatch({type: CHARACTERS, payload: data})
    } catch (error) {
      throw Error(error.message);
    };
  };
};

export const clear = () => { return {type: CLEAR, payload: []} };

export const searchCharacters = (name) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`${endpoint}character/name?name=${name}`);
      return dispatch({type: SEARCH_CHARACTERS, payload: data})
    } catch (error) {
      throw Error(error.message);
    };
  };
};

export const addRandom = (data) => { return {type: RANDOM, payload: data} };

export const deleteCharacter = (id) => { return {type: DELETE_CHARACTER, payload: id} };






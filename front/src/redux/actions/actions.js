import axios from "axios";
import {ADD_FAV, REMOVE_FAV, FILTER, ORDER, CHARACTERS, CLEAR, SEARCH_CHARACTERS, RANDOM} from "../action-types/action-types";

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
export const filterCards = (gender) => { return {type: FILTER, payload: gender} };

export const orderCards = (orden) => { return {type: ORDER, payload: orden} };

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





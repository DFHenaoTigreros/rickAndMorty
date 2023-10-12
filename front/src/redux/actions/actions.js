import axios from "axios";
import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "../action-types/action-types";

const endpoint = 'http://localhost:3001/rickandmorty/fav/';

export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post(endpoint, character);
      return dispatch({type: ADD_FAV, payload: data});
    } catch (error) {
      throw Error(error.message);
    }
  };
};
export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.delete(`${endpoint}${id}`);
      return dispatch({type: REMOVE_FAV, payload: data});
    } catch (error) {
      throw Error(error.message);
    }
  };
};
export const filterCards = (gender) => { return {type: FILTER, payload: gender} };
export const orderCards = (orden) => { return {type: ORDER, payload: orden} };

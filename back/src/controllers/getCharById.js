const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const {id} = req.params;
    const {name, status, species, type, gender, origin, location, image, episode} = (await axios(`https://rickandmortyapi.com/api/character/${id}`)).data;
    const character = {id, name, status, species, type, gender, origin, location, image, episode} 
    return character.name ? res.status(200).json(character) : res.status(404).send("Not found")
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
 getCharById
};
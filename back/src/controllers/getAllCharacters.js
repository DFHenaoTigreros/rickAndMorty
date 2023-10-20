const axios = require("axios");

const getAllCharacters = async (req, res) => {
  try {
    const {data} = await axios(`https://rickandmortyapi.com/api/character`)
    return data.results ? res.status(200).json(data.results) : res.status(404).send("Not found")
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
 getAllCharacters
};
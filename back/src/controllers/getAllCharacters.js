const {Character} = require("../DB_connection");

const getAllCharacters = async (req, res) => {
  try {
    const characters = await Character.findAll();
    return characters ? res.status(200).json(characters) : res.status(404).send("Not found")
  } catch (error) {
    return res.status(500).send(error.message);
  };
};

module.exports = {
 getAllCharacters
};
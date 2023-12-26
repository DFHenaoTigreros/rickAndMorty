const {Character} = require("../DB_connection");

const getCharById = async (req, res) => {
  try {
    const {id} = req.params;
    const character = await Character.findByPk(id);
    return character ? res.status(200).json(character) : res.status(404).send("Not found")
  } catch (error) {
    return res.status(500).send(error.message);
  };
};

module.exports = {
 getCharById
};
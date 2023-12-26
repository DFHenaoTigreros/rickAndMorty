const {Character} = require("../DB_connection");
const {Op} = require("sequelize");

const getCharByName = async (req, res) => {
  try {
    const {name} = req.query;
    const charactersFound = await Character.findAll({where: {name: {[Op.iLike]: `%${name}%`}}})
    return charactersFound ? res.status(200).json(charactersFound) : res.status(404).send("Not found")
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
 getCharByName
};
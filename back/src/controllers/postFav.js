const {Favorite} = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const{id, name, image} = req.body;

    console.log(id, name, image)

    if(!id || !name || !image) return res.status(401).send("Faltan datos");
  
    await Favorite.findOrCreate({where: {id, name, image}})
  
    const myFavorites = await Favorite.findAll();
    return res.status(200).json(myFavorites);

  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  postFav
}


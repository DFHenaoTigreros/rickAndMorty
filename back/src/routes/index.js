const {getAllCharacters} = require("../controllers/getAllCharacters")
const {getCharById} = require("../controllers/getCharById");
const {login} = require("../controllers/login");
const {postFav} = require("../controllers/postFav");
const {postUser} = require("../controllers/postUser");
const {deleteFav} = require("../controllers/deleteFav");
const express = require("express");
const router = express.Router();

router.get("/character/", getAllCharacters);

router.get("/character/:id", getCharById);

router.get("/login", login);

router.post("/login", postUser);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);


module.exports = {
  router
}
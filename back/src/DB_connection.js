require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const CharacterModel = require("./models/Character");
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");

const URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`;
const sequelize = new Sequelize(URL, {logging:false, native: false });

CharacterModel(sequelize);
FavoriteModel(sequelize);
UserModel(sequelize);

const {User, Favorite, Character} = sequelize.models;

User.belongsToMany(Favorite, {through: "user_favorite"});
Favorite.belongsToMany(User, {through: "user_favorite"});

module.exports = {
   User,
   Favorite,
   Character,
   conn: sequelize,
};

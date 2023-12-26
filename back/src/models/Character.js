const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Character", {
    id: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    species: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    episode: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    }
  }, {timestamps: false});
};
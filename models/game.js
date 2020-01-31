module.exports = function(sequelize, DataTypes) {
    const Game = sequelize.define("Game", {
      correctGuess: DataTypes.BOOLEAN
    });
    return Game;
  };
  
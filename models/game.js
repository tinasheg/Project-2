module.exports = function (sequelize, DataTypes) {
    const Game = sequelize.define("Game", {
        correctGuess: DataTypes.BOOLEAN
    });

    Game.associate = function (models) {
        // A Game can't be created without an User due to the foreign key constraint
        Game.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    Game.associate = function (models) {
        // A Game can't be created without a DictionaryID due to the foreign key constraint
        Game.belongsTo(models.Dictionary, {
            foreignKey: {
                allowNull: false
            }
        });

    };

    return Game;
};

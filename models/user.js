module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1],
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1],
    },

    knownLanguages: {
      type: DataTypes.TEXT
    },

    newLanguages: {
      type: DataTypes.TEXT
    },
  });

  User.associate = function(models) {
    // Associating User with Games
    // When an User is deleted, also delete any associated Games
    User.hasMany(models.Game, {
      onDelete: "cascade"
    });
  
  };

  return User;
};

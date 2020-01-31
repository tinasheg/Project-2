module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
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
    }

  });
  return User;
};

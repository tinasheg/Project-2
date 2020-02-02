module.exports = function(sequelize, DataTypes) {
  var Dictionary = sequelize.define("Dictionary", {
    word: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },

    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Dictionary.associate = function(models) {
    // Associating Game with Dictionary
    Dictionary.hasMany(models.Game, {
      onDelete: "restrict"
    });
  };

  return Dictionary;
};

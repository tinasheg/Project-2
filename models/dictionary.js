module.exports = function(sequelize, DataTypes) {
    const Dictionary = sequelize.define("Dictionary", {
      word: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1],
      },
  
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
  
    });
    return Dictionary;
  };
  
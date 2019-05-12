module.exports = function(sequelize, DataTypes) {
  var Inventory = sequelize.define("Inventory",
    {
      menu_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      menu_name: DataTypes.STRING,
      menu_category: DataTypes.STRING,
      menu_price:DataTypes.DECIMAL(10,2),
      stock: DataTypes.INTEGER,
      isAvailable: DataTypes.BOOLEAN
    },
    {
      timestamps: true
    }
  );
  return Inventory;
};
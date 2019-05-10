module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define(
    "Order",
    {
      receipt_id: DataTypes.INTEGER,
      customer_id: DataTypes.INTEGER,
      table_num: DataTypes.INTEGER,
      menu_id: DataTypes.INTEGER,
      // menu_name: DataTypes.STRING, do we actually need this?
      isClosedOut: DataTypes.BOOLEAN
    },
    {
      timestamps: true
    }
  );
  return Order;
};
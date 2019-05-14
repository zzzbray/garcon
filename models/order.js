module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define(
    "Order",
    {
      entry_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      receipt_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      // customer_id: {
      //   type: DataTypes.INTEGER,
      // },
      // table_num: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false
      // },
      // menu_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false
      // },
      isClosedOut: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      // Timestamps
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
      }
    },
    {
      timestamps: true
    }
  );

  Order.associate = function(models) {
    Order.belongsTo(models.Inventory);
  };
  
  return Order;
};
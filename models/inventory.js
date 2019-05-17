module.exports = function(sequelize, DataTypes) {
  var Inventory = sequelize.define("Inventory",
    {
      menu_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      menu_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      menu_category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      menu_price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      isAvailable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
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
      timestamps: true,
      freezeTableName: true
    }
  );

  Inventory.associate = function(models) {
    Inventory.hasMany(models.Order);
  };
  return Inventory;
};
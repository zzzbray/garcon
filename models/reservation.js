module.exports = function(sequelize, DataTypes) {
  var Reservation = sequelize.define("Reservation",
    {
      reservation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      reservationDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      reservationTime: {
        type: DataTypes.TIME,
        allowNull: false
      },
      partySize: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      notes: {
        type: DataTypes.STRING
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

  return Reservation;
};
module.exports = function (sequelize, DataTypes) {
  var Reservation = sequelize.define("Reservation", {
    customer_id: DataTypes.INTEGER,
    reservationDate: DataTypes.DATEONLY,
    reservationTime: DataTypes.DATE,
    partySize: DataTypes.INTEGER,
    notes: DataTypes.STRING,
  }, {
    timestamps: true
  });
  return Reservation;
};
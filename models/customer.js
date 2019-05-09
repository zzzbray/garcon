module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      birthday: DataTypes.DATEONLY,
      anniversary: DataTypes.DATEONLY
    },
    {
      timestamps: true
    }
  );
  return Customer;
};
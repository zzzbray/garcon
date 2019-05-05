// ===============================
//      MODELS & SEQUELIZE
// ===============================

module.exports = function(sequelize, DataTypes) {
  var Reservation = sequelize.define(
    "Reservation",
    {
      customer_id: DataTypes.INTEGER,
      reservationDate: DataTypes.DATEONLY,
      reservationTime: DataTypes.DATE,
      partySize: DataTypes.INTEGER,
      notes: DataTypes.STRING,
    ),
    {
      timestamps: true
    }
  );
  return Reservation;
};

// ===============================
//      API ROUTES
// ===============================

// --------------------------------------------------------
// POST route for manager to add new movie to db.
app.post("/api/reservations", function(req, res) {
db.Reservation.create({
    customer_id: req.body.formCustomerID,
    reservationDate: req.body.formResDate,
    reservationTime: req.body.formResTime,
    partySize: req.body.formPartySize,
    notes: req.body.formNotes
}).then(function(newMovie) {
    res.json(newMovie);
});
});
// --------------------------------------------------------

// ===============================
//      CUSTOMER EXPERIENCE
// ===============================

// --------------------------------------------------------
// POSTING RESERVATION TO DB
$("#reservation-form").on("submit", function(event) {
    event.preventDefault();
    
    // Capture form data
    var customerID //what is this? this.state.customerID??
    var resDate = $(".res-date").val().trim();
    var resTime = $(".res-time").val().trim();
    var partySize = $(".party-size").val().trim();
    var resNotes = $(".res-notes").val().trim();
    
    // Use AJAX to post form data to db
    $.ajax({
      method: "POST",
      url: "/api/reservations/",
      data: {
        formCustomerID: customerID,
        formResDate: resDate,
        formResTime: resTime,
        formPartySize: partySize,
        formNotes: resNotes
      }
    }).then(function(response) {
      console.log("Testing response: ", response);
      $(".res-date").empty();
      $(".res-time").empty();
      $(".party-size").empty();
      $(".res-notes").empty();
      window.location.href = "/reservation"; //UPDATE THIS ACCORDINGLY
    });
  });
// --------------------------------------------------------
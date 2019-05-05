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


// ===============================
//      MANAGER EXPERIENCE
// ===============================

// --------------------------------------------------------
// PULLING ACTIVE RESERVATIONS FROM DB
// Function to pull movies from db
function dbPull() {
  $.get("/api/reservations/", function(dbData) {
    return dbData;
  }).then(function(response) {
    var dbReservations = response;
    console.log("Testing db pull", dbReservations);
    for (let k = 0; k < dbReservations.length; k++) {
      var resID = dbReservations[k].id;
      // -------------------------------------------------
      // BREAKPOINT
      // -------------------------------------------------
      var movieTitle = dbMovies[k].title;
      var movieYear = dbMovies[k].year;
      var movieGenre = dbMovies[k].genre;
      var moviePrice = dbMovies[k].price;
      var movieFormat = dbMovies[k].format;
      var movieReserved = dbMovies[k].isReserved;
      
      // Create checkbox columns in table depending on isReserved status from db
      if (movieReserved) {
        var reserved = "<td><span class='custom-checkbox'><input type='checkbox' id='reserved' movie-id='" + movieID + "' name='options[]' value='1' checked><label for='reserved'></label></span></td>";
        var checkIn = "<td><span class='custom-checkbox'><input type='checkbox' id='checkIn' movie-id='" + movieID + "' name='options[]' value='1'><label for='checkIn'></label></span></td>";
        var checkOut = "<td><span class='custom-checkbox'><input type='checkbox' id='checkOut' movie-id='" + movieID + "' name='options[]' value='1'><label for='checkOut'></label></span></td>";
        var reservedCols = reserved + checkIn + checkOut;
      } else {
        var reserved = "<td><span class='custom-checkbox'><input type='checkbox' id='reserved' movie-id='" + movieID + "' name='options[]' value='1'><label for='reserved'></label></span></td>";
        var checkIn = "<td><span class='custom-checkbox'><input type='checkbox' id='checkIn' movie-id='" + movieID + "' name='options[]' value='1'><label for='checkIn'></label></span></td>";
        var checkOut = "<td><span class='custom-checkbox'><input type='checkbox' id='checkOut' movie-id='" + movieID + "' name='options[]' value='1'><label for='checkOut'></label></span></td>";
        var reservedCols = reserved + checkIn + checkOut;
      }

      // Create html for new table rows
      var idCol = "<td>" + movieID + "</td>";
      var titleCol = "<td>" + movieTitle + "</td>";
      var yearCol = "<td>" + movieYear + "</td>";
      var genreCol = "<td>" + movieGenre + "</td>";
      var priceCol = "<td>" + moviePrice + "</td>";
      var formatCol = "<td>" + movieFormat + "</td>";
      var modalCols = "<td><a href='#editMovieModal' class='edit' movie-id='" + movieID + "' data-toggle='modal'><i class='material-icons' data-toggle='tooltip' title='edit'>&#xE254;</i></a><a href='#deleteMovieModal' class='delete' movie-id='" + movieID + "' data-toggle='modal'><i class='material-icons' data-toggle='tooltip' title='delete'>&#xE872;</i></a></td>";
      var rowData = "<tr>" + idCol + titleCol + yearCol + genreCol + priceCol + formatCol + reservedCols + modalCols + "</tr>";
      
      // Append new row (comprised of data from db) to table
      dbTable.append(rowData);
    }
  });
}

// --------------------------------------------------------
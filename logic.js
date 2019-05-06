// ===============================
//      MODELS & SEQUELIZE
// ===============================
// --------------------------------------------------------
// Reservation Model
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
// --------------------------------------------------------
// Customer Model
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
// --------------------------------------------------------
// Inventory Model
module.exports = function(sequelize, DataTypes) {
  var Inventory = sequelize.define(
    "Inventory",
    {
      menu_name: DataTypes.STRING,
      menu_category: DataTypes.STRING,
      menu_price:DataTypes.DECIMAL(10,2),
      stock: DataTypes.INTEGER
    },
    {
      timestamps: true
    }
  );
  return Inventory;
};
// --------------------------------------------------------
// Orders Model
module.exports = function(sequelize, DataTypes) {
  var Orders = sequelize.define(
    "Orders",
    {
      receipt_id: DataTypes.INTEGER,
      customer_id: DataTypes.INTEGER,
      table_num: DataTypes.INTEGER,
      menu_id: DataTypes.INTEGER,
      menu_name: DataTypes.STRING,
      isClosedOut: DataTypes.BOOLEAN
    },
    {
      timestamps: true
    }
  );
  return Orders;
};
// --------------------------------------------------------

// ===============================
//      API ROUTES
// ===============================

// --------------------------------------------------------
// POST route for customer to post new reservation to db.
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

// --------------------------------------------------------
// GET route for manager to retrieve all reservations from db.
app.get("/api/reservations", function(req, res) {
  db.Reservation.findAll({}).then(function(allReservations) {
    res.json(allReservations);
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
const dbTable = $("#db-table");

function dbPull() {
  $.get("/api/reservations/", function(dbData) {
    return dbData;
  }).then(function(response) {
    var dbReservations = response;
    console.log("Testing db pull", dbReservations);
    for (let k = 0; k < dbReservations.length; k++) {
      // Store db data in JavaScript variables
      var resID = dbReservations[k].reservation_id;
      var customerID = dbReservations[k].customer_id;
      var resDate = dbReservations[k].reservationDate;
      var resTime = dbReservations[k].reservationTime;
      var partySize = dbReservations[k].partySize;
      var resNotes = dbReservations[k].notes;

      // Create html for new table rows
      var resIDCol = "<td>" + resID + "</td>";
      var custIDCol = "<td>" + customerID + "</td>";
      var resDateCol = "<td>" + resDate + "</td>";
      var resTimeCol = "<td>" + resTime + "</td>";
      var partySizeCol = "<td>" + partySize + "</td>";
      var resNotesCol = "<td>" + resNotes + "</td>";
      // Leaving this in in case we want to add modal feature for edit reservation functionality
      // var modalCols = "<td><a href='#editMovieModal' class='edit' movie-id='" + movieID + "' data-toggle='modal'><i class='material-icons' data-toggle='tooltip' title='edit'>&#xE254;</i></a><a href='#deleteMovieModal' class='delete' movie-id='" + movieID + "' data-toggle='modal'><i class='material-icons' data-toggle='tooltip' title='delete'>&#xE872;</i></a></td>";
      var rowData = "<tr>" + resIDCol + custIDCol + resDateCol + resTimeCol + partySizeCol + resNotesCol + "</tr>";
      
      // Append new row (comprised of data from db) to table
      dbTable.append(rowData);
    }
  });
}

// --------------------------------------------------------
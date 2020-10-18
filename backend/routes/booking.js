const express = require("express");

const {
  addBooking,
  deleteBookings,
  getBookings,
} = require("../controllers/booking");

const router = express.Router();

router.route("/").get(getBookings).post(addBooking);

router.route("/:id").delete(deleteBookings);

module.exports = router;

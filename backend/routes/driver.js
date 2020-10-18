const express = require("express");
const router = express.Router();

const {
  createDriver,
  allDrivers,
  updateDriver,
  deleteDriver,
  authenticateDriver,
  updateRoute,
  setBookingStatus,
  validateBooking,
} = require("../controllers/driver");

router.post("/addDriver", createDriver);

router.get("/viewDrivers", allDrivers);

router.post("/updateDrivers/:id", updateDriver);

router.delete("/deleteDriver/:id", deleteDriver);

router.post("/authenticate-driver", authenticateDriver);

router.post("/driver-route-change", updateRoute);
router.post("/driver-update-booking-status", setBookingStatus);
router.post("/driver-validate-booking", validateBooking);

module.exports = router;

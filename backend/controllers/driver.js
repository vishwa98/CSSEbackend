const Driver = require("../models/driver");
const Booking = require("../models/Booking");

exports.createDriver = (req, res) => {
  console.log("req.body", req.body);

  const driver = new Driver(req.body);

  driver.save((error, driver) => {
    if (error) {
      res.json(error);
    }

    res.json(driver);
  });
};

exports.allDrivers = (req, res) => {
  Driver.find().exec((error, data) => {
    if (error) {
      res.json(error);
    } else res.json(data);
  });
};

exports.updateDriver = (req, res) => {
  Driver.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        res.json(error);
      } else {
        res.json(data);
        console.log("Post updated");
      }
    }
  );
};

exports.deleteDriver = (req, res) => {
  Driver.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      res.json(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};

exports.authenticateDriver = (req, res) => {
  Driver.findOne({ name: req.body.username }, (error, dbResponse) => {
    if (error || !dbResponse) {
      return res.json({ isError: true, msg: "Driver not found!" });
    } else {
      if (req.body.password == dbResponse.password) {
        console.log({
          isError: false,
          msg: "Authenticated successfully...",
        });
        return res.json({
          isError: false,
          msg: "Authenticated successfully...",
        });
      } else {
        return res.json({ isError: true, msg: "Wrong password..." });
      }
    }
  });
};

exports.validateBooking = (req, res) => {
  Booking.findOne({ _id: req.body.bookingId }, (error, dbResponse) => {
    if (error || !dbResponse) {
      return res.json({ isError: true, msg: "Booking not found!" });
    }

    if (dbResponse.isScanned) {
      return res.json({ isError: true, msg: "Booking has Expired!" });
    } else {
      return res.json({ isError: false, msg: "Booking is valid!" });
    }
  });
};

exports.setBookingStatus = (req, res) => {
  Booking.findOne({ _id: req.body.bookingId }, (error, dbResponse) => {
    if (error || !dbResponse) {
      return res.json({ isError: true, msg: "Booking not found!" });
    }

    if (dbResponse.isScanned) {
      return res.json({ isError: true, msg: "Booking has already Expired!" });
    } else {
      dbResponse.isScanned = true;
      dbResponse.save((err) => {
        if (!err) {
          return res.json({ isError: false, msg: "Booking status changed!" });
        } else {
          return res.json({
            isError: true,
            msg: "Booking status update failed!",
          });
        }
      });
    }
  });
};

exports.updateRoute = (req, res) => {
  Driver.findOne({ name: req.body.username }, (error, dbResponse) => {
    if (error || !dbResponse) {
      return res.json({ isError: true, msg: "Driver not found!" });
    } else {
      dbResponse.route = req.body.route;
      dbResponse.save((err) => {
        if (!err) {
          return res.json({ isError: false, msg: "Driver route changed!" });
        } else {
          return res.json({
            isError: true,
            msg: "Driver route update failed!",
          });
        }
      });
    }
  });
};

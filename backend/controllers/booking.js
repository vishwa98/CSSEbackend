const Booking = require("../models/Booking");

//@desc Get all bookings for the day
//@route GET api/bookings/
//@ access public
exports.getBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find();

    console.log(bookings);
    res.status(200).json({
      success: true,
      length: bookings.length,
      data: bookings,
      message: "Successfully fetched",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

//@desc Add a bookings for the day
//@route POST api/bookings/
//@ access public
exports.addBooking = async (req, res, next) => {
  try {
    console.log(req.body);

    let booking = new Booking(req.body);

    const newBooking = await booking.save();

    return res.status(201).json({
      success: true,
      data: newBooking,
      message: "Successfully created",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

//@desc Clear all bookings end of the day
//@route POST api/bookings/:id
//@ access public
exports.deleteBookings = async () => {
  try {
    const deleteBooking = await Booking.findById(req.params.id);

    if (deleteBooking) {
      await deleteBooking.remove();

      return res.status(200).json({
        success: true,
        message: "Delete successfull",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "invalid id value to parse",
    });
  }
};

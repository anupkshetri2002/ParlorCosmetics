const bookingsModel = require("../../models/bookings");

async function allBookings(req, res) {
  try {
    console.log("userid all Users", req.userId);

    const allBookings = await bookingsModel.find();

    res.json({
      message: "All Bookings ",
      data: allBookings,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = allBookings;

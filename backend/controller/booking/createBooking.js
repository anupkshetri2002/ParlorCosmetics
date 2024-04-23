const bookingsModel = require("../../models/bookings");

async function createBookingController(req, res) {
  try {
    console.log("start");
    const { staffId, userId } = req.body;
    console.log(staffId, userId);

    const staff = await bookingsModel.findOne({ staffId });

    console.log("booking done", staffId);

    if (staff) {
      throw new Error("Booking of this staff exits.");
    }

    const payload = {
      ...req.body,
    };

    console.log("payload :", payload);

    const bookingData = new bookingsModel(payload);
    const saveBooking = await bookingData.save();

    res.status(201).json({
      data: saveBooking,
      success: true,
      error: false,
      message: "Booking done Successfully!",
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = createBookingController;

const mongoose = require("mongoose");

const bookings = mongoose.Schema(
  {
    package: String,
    bookingId: {
      ref: "booking",
      type: String,
    },
    date: String,
    time: String,
    userId: String,
    staffId: String,
  },
  {
    timestamps: true,
  }
);

const bookingsModel = mongoose.model("bookings", bookings);

module.exports = bookingsModel;

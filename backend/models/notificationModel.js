const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  // User ID
  userId: {
    ref: "user",
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const notificationtModel = mongoose.model("notification", notificationSchema);

module.exports = notificationtModel;

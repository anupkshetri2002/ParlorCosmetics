const mongoose = require("mongoose");
const adminSchema = mongoose.Schema(
  {
    gallaryImages: [
      {
        src: String,
        width: Number,
        height: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const adminModel = mongoose.model("admin", adminSchema);

module.exports = adminModel;

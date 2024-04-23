const notificationtModel = require("../../models/notificationModel");

async function getNotificationController(req, res) {
  try {
    const currentUser = req.userId;

    const notifications = await notificationtModel
      .find({
        userId: currentUser,
      })
      .populate("userId");

    console.log("notofocatioms ", notifications);

    res.status(200).json({
      data: notifications,
      error: false,
      success: true,
      message: "User details",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = getNotificationController;

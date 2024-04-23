const notificationtModel = require("../../models/notificationModel");
const userModel = require("../../models/userModel");

const createNotificationRoleController = async (req, res) => {
  try {
    const { title, role, description } = req.body;

    const users = await userModel.find({ role: role });

    users.map(async (user) => {
      const payload = {
        userId: user._id,
        title,
        description,
      };

      const notification = new notificationtModel(payload);
      const saveNotificaton = await notification.save();
    });

    res.status(200).json({
      message: "Notification sent",
      error: false,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
module.exports = createNotificationRoleController;

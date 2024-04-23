const userModel = require("../../models/userModel");

async function subscribeController(req, res) {
  try {
    const sessionUser = req.body.userId;

    if (!sessionUser) {
      return res.status(400).json({
        message: "userId is required",
        error: true,
        success: false,
      });
    }

    const user = await userModel.findById(sessionUser);

    if (!user) {
      return res.status(404).json({
        message: "User does not exist",
        error: true,
        success: false,
      });
    }

    if (user.subscribed) {
      return res.status(400).json({
        message: "User already subscribed",
        error: true,
        success: false,
      });
    }

    user.subscribed = true;
    user.save();

    res.status(200).json({
      data: user,
      message: "User Subscribed",
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

module.exports = subscribeController;

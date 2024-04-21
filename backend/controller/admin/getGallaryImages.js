const adminModel = require("../../models/admin");

const getGallaryImages = async (req, res) => {
  try {
    const admin = await adminModel.find();

    console.log("gallaryImages", admin[0].gallaryImages)

    res.json({
      message: "gallary Images",
      data: admin[0].gallaryImages || [],
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
};

module.exports = getGallaryImages;


const adminModel = require("../../models/admin");

const setGallaryImages = async (req, res) => {
  try {
    let saveAdmin; // Declare saveAdmin variable outside the if-else blocks

    console.log(req.body.gallaryImages);

    const admins = await adminModel.find();

    let admin = admins[0];
    if (!admin) {
      admin = new adminModel({ galleryImages: [] }); // 
      admin.gallaryImages = req.body.gallaryImages; // Corrected typo
    } else {
      admin.gallaryImages = req.body.gallaryImages; // Corrected typo
    }
    
    saveAdmin = await admin.save();

    console.log("admin", admin);

    res.json({
      message: "Gallery Images",
      data: saveAdmin,
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

module.exports = setGallaryImages;

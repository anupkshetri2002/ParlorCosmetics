const userModel = require("../../models/userModel");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");
require("dotenv").config();

///otp to email
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Find the user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate a random OTP
    let OTP = randomstring.generate({ length: 6, charset: "numeric" });

    // Ensure OTP doesn't start with zero
    while (OTP.length < 6 && OTP[0] === '0') {
      OTP = '0' + OTP;
    }

    // Store the OTP in the database
    user.resetPasswordOTP = OTP;
    await user.save();

    // Send the OTP to the user's email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL,
        pass: process.env.PASSWORD_GMAIL,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL,
      to: email,
      subject: "Forgot Password - OTP Verification",
      text: `Your OTP for resetting the password is: ${OTP}`,//
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "OTP sent to your email" });
  } catch (err) {
    console.error("Error sending OTP:", err);

   
  }
};


// In forgotPassword.js
module.exports = forgotPassword;

// In passwordReset.js


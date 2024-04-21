const userModel = require("../../models/userModel");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");
require("dotenv").config();



// Reset password 
const passwordReset = async (req, res, next) => {
    try {
      const { email, OTP, newPassword } = req.body;
  
      // Find the user by email
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Validate the OTP
      if (user.resetPasswordOTP !== OTP) {
        return res.status(400).json({ message: "Invalid OTP please" });
      }
  
      // Hash the new password
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(newPassword, salt);
    
  
      // Update the user's password
      user.password = hash;
      user.resetPasswordOTP = null; // Clear the OTP
      await user.save();
  
      res.status(200).json({ message: "Password reset successful" });
    } catch (err) {
      console.error("Error resetting password:", err);
     
    }
  };

  module.exports = passwordReset;
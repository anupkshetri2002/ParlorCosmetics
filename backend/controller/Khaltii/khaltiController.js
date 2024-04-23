const express = require("express");
const axios = require("axios");

const router = express.Router();

// Khalti verification route
const paymentMethod =  async (req, res) => {
  try {
    const { token, amount } = req.body;

    // Replace with your Khalti live secret key
    const PaymentSecretKey = process.env.PaymentSecretKey;

    const config = {
      headers: {
        Authorization: `Key ${PaymentSecretKey}`,
      },
    };

    const response = await axios.post(
      "https://khalti.com/api/v2/payment/verify/",
      { token, amount },
      config
    );

    // Handle the Khalti verification response as needed
    console.log(response.data);

    // Respond to the frontend with the verification result
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error verifying Khalti payment" });
  }
};

module.exports = paymentMethod;

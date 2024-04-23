const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/user/userSignUp");
const userSignInController = require("../controller/user/userSignIn");
const userDetailsController = require("../controller/user/userDetails");
const authToken = require("../middleware/authToken");
const userLogout = require("../controller/user/userLogout");
const allUsers = require("../controller/user/allUsers");
const updateUser = require("../controller/user/updateUser");
const UploadProductController = require("../controller/product/uploadProduct");
const getProductController = require("../controller/product/getProduct");
const updateProductController = require("../controller/product/updateProduct");
const getCategoryProduct = require("../controller/product/getCategoryProductOne");
const getCategoryWiseProduct = require("../controller/product/getCategoryWiseProduct");
const getProductDetails = require("../controller/product/getProductDetails");
const addToCartController = require("../controller/user/addToCartController");
const countAddToCartProduct = require("../controller/user/countAddToCartProduct");
const addToCartViewProduct = require("../controller/user/addToCartViewProduct");
const updateAddToCartProduct = require("../controller/user/updateAddToCartProduct");
const deleteAddToCartProduct = require("../controller/user/deleteAddToCartProduct");
const searchProduct = require("../controller/product/searchProduct");
const filterProductController = require("../controller/product/filterProduct");
const createBookingController = require("../controller/booking/createBooking");
const allBookings = require("../controller/booking/getAllBookings");
const deleteBookingController = require("../controller/booking/deleteBooking");
const getGallaryImages = require("../controller/admin/getGallaryImages");
const setGallaryImages = require("../controller/admin/setGallaryImages");
const forgotPassword = require("../controller/user/forgotPassword");
const passwordReset = require("../controller/user/resetPassword");
const subscribeController = require("../controller/user/subscribeController");
const recoverPasswordController = require("../controller/user/resetPassword");
const forgotPasswordController = require("../controller/user/forgotPassword");
const getNotificationController = require("../controller/notification/getNotification");
const createNotificationRoleController = require("../controller/notification/createNotificationRole");


router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);
router.post("/subscribe", subscribeController);

//admin panel
router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken, updateUser);

//product
router.post("/upload-product", authToken, UploadProductController);
router.get("/get-product", getProductController);
router.post("/update-product", authToken, updateProductController);
router.get("/get-categoryProduct", getCategoryProduct);
router.post("/category-product", getCategoryWiseProduct);
router.post("/product-details", getProductDetails);
router.get("/search", searchProduct);
router.post("/filter-product", filterProductController);

//user add to cart
router.post("/addtocart", authToken, addToCartController);
router.get("/countAddToCartProduct", authToken, countAddToCartProduct);
router.get("/view-card-product", authToken, addToCartViewProduct);
router.post("/update-cart-product", authToken, updateAddToCartProduct);
router.post("/delete-cart-product", authToken, deleteAddToCartProduct);

//booking
router.post("/create-booking", createBookingController);
router.get("/allBookings", allBookings);
router.delete("/delete-booking", deleteBookingController);

//admin
router.get("/get-galary-images", getGallaryImages);
router.post("/set-gallary-images", setGallaryImages);

//forgot password routes
router.post("/forgot", forgotPasswordController);
router.post("/reset", recoverPasswordController);

//notificatons
router.get("/get-notifications", getNotificationController);
router.post("/create-notification", createNotificationRoleController);



module.exports = router;

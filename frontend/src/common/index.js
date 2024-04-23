const backendDomin = "http://localhost:8000";

const SummaryApi = {
  signUP: {
    url: `${backendDomin}/api/signup`,
    method: "post",
  },
  signIn: {
    url: `${backendDomin}/api/signin`,
    method: "post",
  },
  current_user: {
    url: `${backendDomin}/api/user-details`,
    method: "get",
  },
  logout_user: {
    url: `${backendDomin}/api/userLogout`,
    method: "get",
  },
  allUser: {
    url: `${backendDomin}/api/all-user`,
    method: "get",
  },
  updateUser: {
    url: `${backendDomin}/api/update-user`,
    method: "post",
  },
  uploadProduct: {
    url: `${backendDomin}/api/upload-product`,
    method: "post",
  },
  allProduct: {
    url: `${backendDomin}/api/get-product`,
    method: "get",
  },
  updateProduct: {
    url: `${backendDomin}/api/update-product`,
    method: "post",
  },
  categoryProduct: {
    url: `${backendDomin}/api/get-categoryProduct`,
    method: "get",
  },
  categoryWiseProduct: {
    url: `${backendDomin}/api/category-product`,
    method: "post",
  },
  productDetails: {
    url: `${backendDomin}/api/product-details`,
    method: "post",
  },
  addToCartProduct: {
    url: `${backendDomin}/api/addtocart`,
    method: "post",
  },
  addToCartProductCount: {
    url: `${backendDomin}/api/countAddToCartProduct`,
    method: "get",
  },
  addToCartProductView: {
    url: `${backendDomin}/api/view-card-product`,
    method: "get",
  },
  updateCartProduct: {
    url: `${backendDomin}/api/update-cart-product`,
    method: "post",
  },
  deleteCartProduct: {
    url: `${backendDomin}/api/delete-cart-product`,
    method: "post",
  },
  searchProduct: {
    url: `${backendDomin}/api/search`,
    method: "get",
  },
  filterProduct: {
    url: `${backendDomin}/api/filter-product`,
    method: "post",
  },
  createBooking: {
    url: `${backendDomin}/api/create-booking`,
    method: "post",
  },
  allBookings: {
    url: `${backendDomin}/api/allBookings`,
    method: "get",
  },
  deleteBookings: {
    url: `${backendDomin}/api/delete-booking`,
    method: "delete",
  },
  getGallaryImages: {
    url: `${backendDomin}/api/get-galary-images`,
    method: "get",
  },
  setGallaryImages: {
    url: `${backendDomin}/api/set-gallary-images`,
    method: "post",
  },
  subscribe: {
    url: `${backendDomin}/api/subscribe/`,
    method: "post",
  },
  forgotPassword: {
    url: `${backendDomin}/api/forgot/`,
    method: "post",
  },
  recoverPassword: {
    url: `${backendDomin}/api/reset/`,
    method: "post",
  },
  getNotification : {
    url: `${backendDomin}/api/get-notifications`,
    method: "get",
  },
  updateNotification : {
    url: `${backendDomin}/api/update-notification`,
    method: "post",
  },
};

export default SummaryApi;

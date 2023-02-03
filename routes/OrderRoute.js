const express = require("express");
const { createOrder } = require("../controllers/OrderController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, createOrder);

module.exports = router;

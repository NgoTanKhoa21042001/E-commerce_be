const express = require("express");
const { createUser } = require("../controllers/UserController");
const router = express.Router();

router.route("/registration").post(createUser);

module.exports = router;

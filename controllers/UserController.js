const User = require("../models/UserModel");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsynErrors = require("../middleware/catchAsynError");

// Register
exports.createUser = catchAsynErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "https://test.com",
      url: "https://test.com",
    },
  });
  res.status(200).json({
    success: true,
    user,
  });
});

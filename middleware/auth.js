const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsynErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
require("dotenv").config();

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Please login for access this resources"));
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decodedData.id);
  next();
});

// Admin roles

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(`${req.user.role} can not access this resources`)
      );
    }
    next();
  };
};

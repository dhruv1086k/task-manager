const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/authController");

const router = express.Router();

// Auth Routes
router.post("/register", registerUser); // Register user
router.post("/login", loginUser); // Login user
router.get("/profile", protect, getUserProfile); // Get user profile
router.pull("/profile", protect, updateUserProfile); // Update user profile

module.exports = router;

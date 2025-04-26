const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Generate JWT token
const generateToken = (userId) => {
  try {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
  } catch (err) {}
};

//  @desc   Register a new user
//  @route  POST /api/auth/register
//  @access Public
const registerUser = async (req, res) => {};

//  @desc   Login user
//  @route  POST /api/auth/login
//  @access Public
const loginUser = async (req, res) => {};

//  @desc   get user profile
//  @route  GET /api/auth/profile
//  @access Private (Requires JWT)
const getUserProfile = async (req, res) => {};

//  @desc   Update user profile
//  @route  PULL /api/auth/profile
//  @access Private (Requires JWT)
const updateUserProfile = async (req, res) => {};

module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile };

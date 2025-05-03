const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Generate JWT token
const generateToken = (userId) => {
  try {
    let token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    console.log(token);
    return token;
  } catch (err) {}
};

//  @desc   Register a new user
//  @route  POST /api/auth/register
//  @access Public
let role = "member";
const registerUser = async (req, res) => {
  try {
    const { name, email, password, profileImageUrl, adminInviteToken } =
      req.body;

    //   check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // determine user role - if token code provided then admin otherwise member
    if (
      adminInviteToken &&
      adminInviteToken == process.env.ADMIN_INVITE_TOKEN
    ) {
      role = "admin";
    }

    // hashing password
    const salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      profileImageUrl,
      role,
    });

    //  return user data with jwt
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      profileImageUrl: user.profileImageUrl,
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

//  @desc   Login user
//  @route  POST /api/auth/login
//  @access Public
const loginUser = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

//  @desc   get user profile
//  @route  GET /api/auth/profile
//  @access Private (Requires JWT)
const getUserProfile = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

//  @desc   Update user profile
//  @route  PULL /api/auth/profile
//  @access Private (Requires JWT)
const updateUserProfile = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile };

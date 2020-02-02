const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const uuidv1 = require('uuid/v1');

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validateUpdateInput = require("../../validation/update");

// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        id: uuidv1(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        college: req.body.college
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched, create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          college: user.college,
          idNumber: user.idNumber,
          birthDate: user.birthDate,
          phoneNumber: user.phoneNumber,
          gradYear: user.gradYear,
          dietaryInfo: user.dietaryInfo,
          vehicleStatus: user.vehicleStatus,
          vehicleSpots: user.vehicleSpots,
          gearStorage: user.gearStorage,
          ownsGear: user.ownsGear,
          winterIkonPass: user.winterIkonPass,
          experienceLevel: user.experienceLevel,
          specialConsiderations: user.specialConsiderations
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

// @route POST api/users/update
// @desc Updates a user
// @access Public
router.post("/update", (req, res) => {
  // Form validation
  const { errors, isValid } = validateUpdateInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ id: req.body.id }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ usernotfound: "User not found" });
    }

    const payload = {
      id: user.id,
      name: user.name,
      college: user.college,
      idNumber: req.body.idNumber,
      birthDate: req.body.birthDate,
      phoneNumber: req.body.phoneNumber,
      gradYear: req.body.gradYear,
      dietaryInfo: req.body.dietaryInfo,
      vehicleStatus: req.body.vehicleStatus,
      vehicleSpots: req.body.vehicleSpots,
      gearStorage: req.body.gearStorage,
      ownsGear: req.body.ownsGear,
      winterIkonPass: req.body.winterIkonPass,
      experienceLevel: req.body.experienceLevel,
      specialConsiderations: req.body.specialConsiderations
    };

    user.idNumber = payload.idNumber;
    user.birthDate = payload.birthDate;
    user.phoneNumber = payload.phoneNumber;
    user.gradYear = payload.gradYear;
    user.dietaryInfo = payload.dietaryInfo;
    user.vehicleStatus = payload.vehicleStatus;
    user.vehicleSpots = payload.vehicleSpots;
    user.gearStorage = payload.gearStorage;
    user.ownsGear = payload.ownsGear;
    user.winterIkonPass = payload.winterIkonPass;
    user.experienceLevel = payload.experienceLevel;
    user.specialConsiderations = payload.specialConsiderations;

    user.save();

    // Sign token
    jwt.sign(
      payload,
      keys.secretOrKey,
      {
        expiresIn: 31556926 // 1 year in seconds
      },
      (err, token) => {
        res.json({
          success: true,
          token: "Bearer " + token
        });
      }
    );
  });
});

module.exports = router;
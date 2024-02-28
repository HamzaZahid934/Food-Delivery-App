const express = require("express");
const router = express.Router();
const user = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = "Hellothisisascrectkeytothewebsite";

router.post(
  "/createuser",
  [
    // Validation middleware
    body("name").notEmpty().withMessage("Name is required"),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email format"),
  ],
  async (req, resp) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ success: false, errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    let securedPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await user.create({
        name: req.body.name,
        password: securedPassword,
        email: req.body.email,
        location: req.body.location,
      });
      resp.json({ success: true });
    } catch (error) {
      console.log(error);
      resp.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email format"),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  async (req, resp) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let userData = await user.findOne({ email });
      if (!userData) {
        return resp
          .status(400)
          .json({ errors: "Try logging with correct email" });
      }
      const passwordCompare = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!passwordCompare) {
        return resp
          .status(400)
          .json({ errors: "Try logging with correct password" });
      }
      const data = {
        user: {
          id: userData.id,
        },
      };
      const authToken = jwt.sign(data, jwtSecret);
      return resp.json({ success: true, authToken: authToken });
    } catch (error) {
      console.log(error);
      resp.json({ success: false });
    }
  }
);
module.exports = router;

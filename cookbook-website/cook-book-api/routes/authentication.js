const router = require("express").Router();
const User = require("../models/User");

// Library for encrypting passwords saved in the database
const bcrypt = require("bcrypt");

// REGISTER
router.post("/register", async (req, res) => {
   try {
      const salt = await bcrypt.genSalt(15);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
         username: req.body.username,
         email: req.body.email,
         password: hashedPassword
      });

      const user = await newUser.save();
      res.status(200).json(user);
   } catch (err) {
      res.status(500).json(err);
   }
});

// LOGIN
router.post("/login", async (req, res) => {
   try {
      const user = await User.findOne({ username: req.body.username });
      //The code changes here for the if statement .. mine didnt worked with the code shown in the video

      if (!user) {
         return res.status(400).json("Wrong credentials");
      }

      const validated = await bcrypt.compare(req.body.password, user.password);
      if (!validated) {
         return res.status(400).json("Wrong credentials");
      }

      res.status(200).json(user);
   } catch (err) {
      res.status(500).json(err);
   }
});

module.exports = router;

const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
require("dotenv/config");
const mongoose = require("mongoose");
//! Import Routes
const authenticationRoute = require("./routes/authentication");
const userRoute = require("./routes/users");
const recipesRoute = require("./routes/recipes");
const categoryRoute = require("./routes/categories");
const { search } = require("./routes/recipes");
const cors = require("cors");
// const multer = require("multer"); // Library for uploading files

app.use(express.json());
app.use(cors());

// Connect to Mongo Database
mongoose
   .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,

      autoIndex: true,
      dbName: "recipes"
   })
   .then(console.log("Connected to Mongo Database!"))
   .catch((err) => console.log(err));

// // Save files(img) in images server/images with the name that we are providing
// const storage = multer.diskStorage({
//    destination: (req, file, cbfunction) => {
//       cbfunction(null, "images");
//    },
//    filename: (req, file, cbfunction) => {
//       cbfunction(null, req.body.name);
//    }
// });

// // Upload file
// const upload = multer({ storage: storage });
// app.post("/server/upload", upload.single("file"), (req, res) => {
//    res.status(200).json("The file has been uploaded");
// });

app.use("/server/authentication", authenticationRoute);
app.use("/server/users", userRoute);
app.use("/server/recipes", recipesRoute);
app.use("/server/recipes/search", search);
app.use("/server/categories", categoryRoute);

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
   res.sendFile(path.join(__dirname, "build", "index.html"));
});
// Start listening to the server
app.listen(port, () => {
   console.log("Server is running");
});

// variable declaration
const express = require("express");
const app = express();
const fs = require("fs");
const multer = require("multer");
const { TesseractWorker } = require("tesseract.js");
const worker = new TesseractWorker();

// storage
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./uploads");
  },

  filename: (req, res, cb) => {
    cb(null, req.file);
  }
});

const upload = multer({ storage: storage }).single("avatar");

app.set("view engine", "ejs");

// routes
app.get("/", (req, res) => {
  res.render("index");
});

// start up the server
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`Hey Server has started on port ${PORT}`));

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

//LOAD env vars
dotenv.config({ path: "./config/config.env" });

// import the file to here
const bootcamps = require("./routes/bootcamps");

const app = express();

//Dev logging module
// consoleil diffrent data logg cheyyum
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// this is middleware
app.use("/api/v1/bootcamps", bootcamps);

app.get("/", (req, res) => {
  //if json want to send we can send like below 2 ways
  //res.json({ aa: 23 });
  // res.send("Hello from express");
  // send status
  // res.sendStatus(400);
  //send statues with json
  // res.status(400).json({
  //   success: false,
  // });
});

// app.get("/api/v1/bootcamps", (req, res) => {
//   res.status(200).json({
//     success: true,
//     msg: "show all bootcamp",
//   });
// });

const PORT = process.env.PORT || 5001;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

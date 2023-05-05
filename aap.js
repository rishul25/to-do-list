const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.port || 8100;
const mongoose = require("mongoose");
const cors = require('cors')

const bodyparser = require("body-parser");
app.use(express.json());
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

// *************** INDEX ROUTE ***************

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// *************** MONGODB CONNECTION ***************
const mongourl =
  "mongodb+srv://user:user@cluster0.t6mpf73.mongodb.net/College";

mongoose
  .connect(mongourl)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error(err);
  });


// *************** REGISTRATION ROUTE ***************

const userRegister = require("./routes/Register");
app.use("/register", userRegister);

// *************** REGISTRATION ROUTE ***************

const userLogin = require("./routes/Login");
app.use("/login", userLogin);

// *************** Admin ROUTE ***************

const AdminData = require("./routes/Admin");
app.use("/admin", AdminData);

//get single 
const Singledata = require("./routes/Admin");
app.use("/admin/get", Singledata);



// *************** Admin ROUTE ***************

const UpadteAdmin = require("./routes/Admin");
app.use("/admin", UpadteAdmin);

// *************** Admin ROUTE ***************

const DeleteAdmin = require("./routes/Admin");
app.use("/admins", DeleteAdmin);


app.listen(PORT, () => {
  console.log("sucess! server started ON " + "http://localhost:8100/");
});

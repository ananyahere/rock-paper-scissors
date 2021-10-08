const express = require("express")
const app = express()
// require('dotenv').config()
const path = require("path")

// App setup
app.use(express.static(path.join(__dirname, "public")))

// GET
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
})

app.get("/success", (req, res) => {
  res.sendFile(__dirname + "/public/success.html");
})

app.listen("8080", console.log("Listening on port 8080."))
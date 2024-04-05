const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Home");
});

app.post("/", (req, res) => {
  res.send("Post");
});

app.put("/", (req, res) => {
  res.send("Put");
});

app.delete("/", (req, res) => {
  res.send("Delete");
});

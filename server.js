const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Ferreira Gatão");
});
app.listen(3001);

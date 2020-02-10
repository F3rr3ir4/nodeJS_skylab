const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://ferreira:F3rr31r4321@cluster0-2qq0n.mongodb.net/nodeJsSkylab?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);
requireDir("./src/models");

app.use("/api", require("./src/routes"));
app.listen(3001);

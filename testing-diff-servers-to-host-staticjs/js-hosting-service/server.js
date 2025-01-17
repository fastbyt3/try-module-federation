const express = require("express");
const path = require("path");

const app = express();

app.use((req, _res, next) => {
  console.log("PATH => ", req.path);
  next();
});

app.use(express.static(path.join(__dirname, "assets")));

app.listen(9999, () => {
  console.log("started on port 9999...");
});

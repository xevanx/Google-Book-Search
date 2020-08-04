const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api", apiRoutes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks"
);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
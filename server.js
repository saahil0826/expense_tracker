const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db.js');
dotenv.config({ path: "./config/.env" });
connectDB();

const transactionRoutes = require("./routes/transactions");

// routes
app.get("/", (req, res) => {
  res.redirect("/api/v1/transactions");
});

app.use("/api/v1/transactions", transactionRoutes);

app.get("*", (req, res) => {
  res.send("page does not exist!");
}); // this will overwrite other rotues so it shouldn't
// be at the top.

app.listen(PORT, console.log(`now listening on port ${PORT}`));

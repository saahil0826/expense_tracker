const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

dotenv.config({path: './config/config.env'});

const transactions = require('./routes/transactions');

const app = express();
const PORT = process.env.PORT || 5000

// routes
// '/' => "HI there!" {root path}
app.get("/", (req, res)=>
  res.send('hello world')
);

app.use('/api/v1/transactions', transactions);


app.get('*', function(req, res){
  res.send("page does not exist!");
}); // this will overwrite other rotues so it shouldn't
// be at the top.

app.listen(PORT, console.log(`now listening on port ${PORT}`));

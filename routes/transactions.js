var express = require("express");
var router = express.Router();

// const verifyPassword = (req, res, next) => {
//   const { password } = req.query;
//   if (password === "blue") {
//     next();
//   }
//   res.send("you don't have access to this page sozz");
// };


// router.get("/", function (req, res) {
//   res.redirect("/camps");
// });


router.get("/", function (req, res) {
  res.send("transactions home page");
});


router.get("/:id", function (req, res) {
  var { id } = req.params;
  res.send(`you are on the transactions page and the id is ${id} `);
});


module.exports = router;

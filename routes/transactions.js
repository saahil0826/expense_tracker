var express = require("express");
var router = express.Router();
const { getTransactions } = require("../controllers/transactions");

// router.get("/", function (req, res) {
//   res.send("transactions home page");
// });

router.route("/").get(getTransactions);

router.get("/:id", (req, res) => {
  var { id } = req.params;
  res.send(`you are on the transactions page and the id is ${id} `);
});

module.exports = router;

var express = require("express");
var router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transactions");


router.route("/").get(getTransactions).post(addTransaction);

router.route("/:id").delete(deleteTransaction);

module.exports = router;

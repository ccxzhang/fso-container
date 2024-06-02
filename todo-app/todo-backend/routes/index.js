const express = require("express");
const router = express.Router();

const configs = require("../util/config");
const redis = require("../redis");

let visits = 0;

/* GET index data. */
router.get("/", async (req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

router.get("/statistics", async (req, res) => {
  const todoCounter = await redis.getAsync("added_todos");

  console.log("todonumber", todoCounter);

  if (!todoCounter) {
    res.send({ added_todos: 0 });
  } else {
    res.send({ added_todos: Number(todoCounter) });
  }
});

module.exports = router;

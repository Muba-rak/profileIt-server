const router = require("express").Router();
const { getAllStoriesByUser, createStory } = require("../controller/status");

router.route("/status").get(getAllStoriesByUser).post(createStory);

module.exports = router;

const router = require("express").Router();
const {
  getAllAssignments,
  getSingleAssignment,
  createAssignment,
} = require("../controller/assignment");

router.route("/assignment").get(getAllAssignments).post(createAssignment);
router.get("/assignment/:id", getSingleAssignment);

module.exports = router;

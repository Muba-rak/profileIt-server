const Assignment = require("../models/assignment");

//get all assignment
//create assignment
// get single assignment
const getAllAssignments = async (req, res) => {
  try {
    const { userId } = req.user;
    const assignments = await Assignment.find().populate("createdBy");
    res.status(200).json({ success: true, assignments });
  } catch (error) {
    res.json({ error });
  }
};

const createAssignment = async (req, res) => {
  const { userId } = req.user;
  try {
    req.body.createdBy = userId;
    const status = await Assignment.create({ ...req.body });
    res.status(201).json({ success: true, status });
  } catch (error) {
    res.json({ error });
  }
};

const getSingleAssignment = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Assignment.findById({ _id: id }).populate("createdBy");
    res.status(200).json({ success: true, post });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = { getAllAssignments, getSingleAssignment, createAssignment };

const Status = require("../models/status");



const getAllStoriesByUser = async (req, res) => {
  const { userId } = req.user;
  try {
    const statuses = await Status.find({ createdBy: userId }).populate(
      "createdBy"
    );
    res.status(200).json({ success: true, statuses });
  } catch (error) {
    res.json({ error });
  }
};



const createStory = async (req, res) => {
  const { userId } = req.user;
  try {
    req.body.createdBy = userId;
    const status = await Status.create({ ...req.body });
    res.status(201).json({ success: true, status });
  } catch (error) {
    res.json({ error });
  }
};


module.exports = {
  getAllStoriesByUser,
  createStory,
};

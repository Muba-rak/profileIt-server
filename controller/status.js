const Status = require("../models/status");

//get all stories
// const getAllStories = async (req, res) => {
//   try {
//     const posts = await Post.find({}).populate('createdBy');
//     res.status(200).json({ success: true, posts });
//   } catch (error) {
//     res.json({ error });
//   }
// };

// // get single stories

// const getAStory = async (req, res) => {
//   const { postId } = req.params;
//   try {
//     const post = await Post.findById({ _id: postId }).populate("createdBy");;
//     res.status(200).json({ success: true, post });
//   } catch (error) {
//     res.json({ error });
//   }
// };

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

// const getAStoryByUser = async (req, res) => {
//   const { postId } = req.params;
//   const { userId } = req.user;
//   try {
//     const post = await Post.findOne({
//       _id: postId,
//       createdBy: userId,
//     }).populate("createdBy");;
//     res.status(200).json({ success: true, post });
//   } catch (error) {
//     res.json({ error });
//   }
// };

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

// const updateStory = async (req, res) => {
//   const { postId } = req.params;
//   const { userId } = req.user;
//   try {
//     const post = await Post.findOneAndUpdate(
//       {
//         _id: postId,
//         createdBy: userId,
//       },
//       req.body,
//       {
//         new: true,
//         runValidators: true,
//       }
//     ).populate("createdBy");;
//     res.status(200).json({ success: true, post });
//   } catch (error) {
//     res.json({ error });
//   }
// };

// const deleteStory = async (req, res) => {
//   const { postId } = req.params;
//   const { userId } = req.user;
//   try {
//     const post = await Post.findOneAndDelete({
//       _id: postId,
//       createdBy: userId,
//     });
//     res.status(200).json({ success: true, post });
//   } catch (error) {
//     res.json({ error });
//   }
// };

module.exports = {
  getAllStoriesByUser,
  createStory,
};

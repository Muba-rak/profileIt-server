const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assignmentSchema = new Schema(
  {
    introduction: {
      type: String,
      required: true,
    },
    literatureReview: {
      type: String,
      required: true,
    },
    methodology: {
      type: String,
      required: true,
    },
    analysisResults: {
      type: String,
      required: true,
    },
    conclusionRecommendation: {
      type: String,
      required: true,
    },
    revisedEdition: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Assignment", assignmentSchema);

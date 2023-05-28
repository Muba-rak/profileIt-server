const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "please enter a username"],
    },

    email: {
      type: String,
      required: [true, "please enter an email"],
    },
    password: {
      type: String,
      required: [true, "please enter a password"],
    },
    fullname: {
      type: String,
      required: [true, "Please enter a name"],
    },
    mothersmaidenname: {
      type: String,
      required: [true, "Please enter your Mother's maiden Name"],
    },
    address: {
      type: String,
      required: [true, "Please enter your address"],
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "others"],
    },
    hobby: {
      type: String,
      required: [true, "Please enter your hobbies"],
    },
    height: {
      type: Number,
      required: [true, "Please enter your height"],
    },
    skills: {
      type: String,
      required: [true, "Please enter your skills"],
    },
    nationality: {
      type: String,
      required: [true, "Please enter your Nationality"],
    },
    dob: {
      type: Date,
      required: [true, "Enter your date of birth"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Status", postSchema);

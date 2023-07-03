require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.set("strictQuery", true);
const auth = require("./middleware/auth");
const userRouter = require("./routes/user");
const statusRouter = require("./routes/status");
const User = require("./models/user");

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1", userRouter);
app.get("/api/v1/user", auth, async (req, res) => {
  const { userId } = req.user;
  const user = await User.findOne({ _id: userId });
  res.status(200).json({ email: user.email, status: user.status });
});
app.use("/api/v1", auth, statusRouter);

app.use((req, res) => {
  res.send("route not found");
});
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`app listening on ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

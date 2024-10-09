const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  status: String,
  priority: Number,
  description: String,
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
});

module.exports = mongoose.model("Task", taskSchema);

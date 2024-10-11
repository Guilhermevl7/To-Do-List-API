const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  status: {
    type: String,
    enum: ["Em andamento", "Finalizado"],
    default: "Em andamento",
  },
  priority: { type: Number, min: 1, max: 10 },
  description: String,
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
});

module.exports = mongoose.model("Task", taskSchema);

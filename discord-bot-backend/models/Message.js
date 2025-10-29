// models/Message.js

const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  username: { type: String, required: true },
  avatar: { type: String },
  timestamp: { type: Date, required: true },
  channel: { type: String, required: true },
});

module.exports = mongoose.model("Message", messageSchema);

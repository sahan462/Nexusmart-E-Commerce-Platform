const mongoose = require("mongoose");

const customerIssueSchema = new mongoose.Schema({
  subject: String,
  description: String,
  status: String,
  replies: {
    text: String,
    date: { type: Date, default: Date.now },
  },
});

module.exports = mongoose.model("CustomerIssue", customerIssueSchema);

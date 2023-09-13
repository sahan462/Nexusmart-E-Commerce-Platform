const mongoose = require("mongoose");

const customerIssueSchema = new mongoose.Schema({
  subject: String,
  description: String,
  status: String,
  replie: {
    text: String,
    date: { type: Date, default: Date.now },
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const CustomerIssue = mongoose.model("CustomerIssue", customerIssueSchema);
module.exports = CustomerIssue

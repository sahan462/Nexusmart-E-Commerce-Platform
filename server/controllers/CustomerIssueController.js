const CustomerIssue = require("../models/CustomerIssueModel");


const addIssue = async (req, res) => {
  const { subject, description, status } = req.body;

  try {
    const newIssue = new CustomerIssue({
      subject: subject,
      description: description,
      status: status,
      replies: [], 
    });

    await newIssue.save();
    res.status(200).send(newIssue);
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};


const viewIssues = async (req, res) => {
  try {
    const issues = await CustomerIssue.find();
    res.status(200).send(issues);
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};


const addReply = async (req, res) => {
  const { issueId } = req.params; // Extract the issueId from the URL
  const { text, date } = req.body;

  try {
    const issue = await CustomerIssue.findById(issueId);


    // Push the new reply to the replies array
    issue.replies.push({
      text: text,
      date: date,
    });

    await issue.save();
    res.status(200).send(issue);
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};

module.exports = {
  addIssue,
  viewIssues,
  addReply,
};
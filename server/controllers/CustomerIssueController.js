const CustomerIssue = require("../models/CustomerIssueModel");


const addIssue = async (req, res) => {
  const { subject, description, id } = req.body;

  try {
    const newIssue = new CustomerIssue({
      subject: subject,
      description: description,
      status: "opened",
      customer: id
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

  const {status, mine} = req.query;
  let query = {};
  if (status) {
    query.status = status
  }
  if(mine && req.body.id){
    query.customer = req.body.id
  }
  try {
    const issues = await CustomerIssue.find(query);
    res.status(200).send(issues);
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};


const addReply = async (req, res) => {
  const { issueId } = req.params; // Extract the issueId from the URL
  const { reply } = req.body;

  try {
    let issue = await CustomerIssue.findById(issueId);

    issue.replie.text = reply;
    issue.status = "closed"

    await issue.save();
    res.status(200).send(issue);
  } catch (error) {
    res.status(400).send({
      error: error.message
    });
  }
};

const deleteIssue = async (req, res) => {
  const {issueId} = req.params;
  try {
    const issue = await CustomerIssue.findByIdAndRemove(issueId);
    res.status(200).send(issue)
  } catch (error) {
    res.status(400).send({
      error: error.message
    })
  }
}

module.exports = {
  addIssue,
  viewIssues,
  addReply,
  deleteIssue
};
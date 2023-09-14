const express = require("express");
const router = express.Router();
const customerIssueController = require("../controllers/CustomerIssueController");
const { verifySignin, verifyAdmin } = require("../middleware/auth");

// Route to add a new issue
router.post("/", [verifySignin], customerIssueController.addIssue);

// Route to view all issues
router.get("/", customerIssueController.viewIssues);

// Route to add a reply to an issue
router.post("/reply/:issueId",[verifySignin, verifyAdmin], customerIssueController.addReply);

router.post("/delete/:issueId",[verifySignin, verifyAdmin], customerIssueController.deleteIssue);
router.post("/reply/:Id", customerIssueController.addReply);

module.exports = router;

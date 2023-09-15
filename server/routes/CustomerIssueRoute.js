const express = require("express");
const router = express.Router();
const customerIssueController = require("../controllers/CustomerIssueController");
const { verifySignin, verifyAdmin } = require("../middleware/auth");

router.post("/", [verifySignin], customerIssueController.addIssue);
router.get("/", customerIssueController.viewIssues);
router.post("/reply/:issueId",[verifySignin, verifyAdmin], customerIssueController.addReply);
router.post("/delete/:issueId",[verifySignin, verifyAdmin], customerIssueController.deleteIssue);
router.post("/reply/:Id", customerIssueController.addReply);

module.exports = router;

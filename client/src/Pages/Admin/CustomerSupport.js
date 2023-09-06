import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomerSupport = () => {
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [reply, setReply] = useState("");

  useEffect(() => {
    // Fetch all customer issues from the server
    axios.get("/issue").then((response) => {
      setIssues(response.data);
    });
  }, []);

  const handleIssueClick = (issue) => {
    setSelectedIssue(issue);
  };

  const handleReplySubmit = async () => {
    try {
      // Send the reply to the server and update the issue
      await axios.post(`/issue/${selectedIssue._id}/reply`, {
        reply,
      });

      // Refresh the issues list after replying
      axios.get("/issue").then((response) => {
        setIssues(response.data);
        setSelectedIssue(null);
        setReply("");
      });
    } catch (error) {
      console.error("Error replying to issue:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Handle Customer Support</h2>
      <div className="issues-list">
        <ul>
          {issues.map((issue) => (
            <li
              key={issue._id}
              onClick={() => handleIssueClick(issue)}
              className="cursor-pointer hover:bg-gray-100 p-2 rounded mb-2"
            >
              <span className="font-semibold">{issue.subject}</span> - Status:{" "}
              {issue.status}
            </li>
          ))}
        </ul>
      </div>
      {selectedIssue && (
        <div className="selected-issue mt-4">
          <h3 className="text-lg font-semibold mb-2">
            Subject: {selectedIssue.subject}
          </h3>
          <p>Description: {selectedIssue.description}</p>
          <div className="mt-4">
            <label htmlFor="reply" className="block font-semibold">
              Reply:
            </label>
            <textarea
              id="reply"
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              className="w-full border rounded px-3 py-2"
            ></textarea>
          </div>
          <button
            onClick={handleReplySubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700"
          >
            Submit Reply
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomerSupport;

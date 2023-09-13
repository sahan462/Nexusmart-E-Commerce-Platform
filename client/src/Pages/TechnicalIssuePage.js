import React, { useState, useEffect } from "react";
import axios from "axios";

const TechnicalIssuePage = () => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [issues, setIssues] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAdmin, setIsAdmin] = useState(false); // Added state for admin
  const [reply, setReply] = useState(""); // Added state for admin reply
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Fetch all issues from the server
    const fetchIssues = async () => {
      try {
        const response = await axios.get("/issue");
        setIssues(response.data);
      } catch (error) {
        console.error("Error fetching issues:", error);
      }
    };

    fetchIssues();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the issue data to the server to be saved in the database
      const response = await axios.post("/issue", {
        subject,
        description,
        isAdmin, // Include isAdmin flag to indicate if it's from admin
      });

      // Update the issues state with the newly submitted issue at the top
      setIssues([response.data, ...issues]);

      setSubject("");
      setDescription("");
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting issue:", error);
    }
  };

  const handleReply = async (id) => {
    try {
      // Send the reply data to the server to be saved in the database
      await axios.post(`/issue/${id}/reply`, {
        reply,
      });

      // Fetch the updated issue with the reply from the server
      const response = await axios.get(`/issue/${id}`);
      const updatedIssue = response.data;

      // Update the issues state to include the reply
      const updatedIssues = issues.map((issue) => {
        if (issue._id === id) {
          return updatedIssue;
        }
        return issue;
      });

      setIssues(updatedIssues);
      setReply("");
    } catch (error) {
      console.error("Error replying to issue:", error);
    }
  };

  const filteredIssues = issues.filter((issue) =>
    issue.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Customer Issues</h2>
      <div className="mb-4">
        <label htmlFor="search" className="block font-semibold">
          Search:
        </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">User ID</th>
            <th className="border border-gray-400 px-4 py-2">Subject</th>
            <th className="border border-gray-400 px-4 py-2">Description</th>
            <th className="border border-gray-400 px-4 py-2">
              Reply from Admin
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredIssues.map((issue) => (
            <tr key={issue._id}>
              <td className="border border-gray-400 px-4 py-2">
                {issue.userId}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {issue.subject}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {issue.description}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {issue.reply ? (
                  issue.reply
                ) : isAdmin ? (
                  <div>
                    <input
                      type="text"
                      value={reply}
                      onChange={(e) => setReply(e.target.value)}
                      className="w-full border rounded px-3 py-2"
                    />
                    <button
                      onClick={() => handleReply(issue._id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Reply
                    </button>
                  </div>
                ) : (
                  "Not replied yet"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Submit a New Issue:</h2>
      {submitted ? (
        <p className="mb-4">
          Thank you for submitting your issue. We will respond shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="subject" className="block font-semibold">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-semibold">
              Description:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full border rounded px-3 py-2"
            ></textarea>
          </div>
          {isAdmin && (
            <div className="mb-4">
              <label htmlFor="reply" className="block font-semibold">
                Admin Reply:
              </label>
              <input
                type="text"
                id="reply"
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover-bg-blue-700"
          >
            Submit Issue
          </button>
        </form>
      )}
    </div>
  );
};

export default TechnicalIssuePage;

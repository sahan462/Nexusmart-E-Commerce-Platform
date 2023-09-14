import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../Components/Loading";
import { useContext } from "react";
import { UserContext } from "../../AuthContext";

const CustomerSupportPage = () => {
  const [issueReplies, setIssueReplies] = useState({}); // Admin reply for each issue
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    // Fetch all issues from the server
    const fetchIssues = async () => {
      try {
        const response = await axios.get("/issue");
        setIssues(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching issues. Please try again later.");
        setLoading(false);
      }
    };

    fetchIssues();
  }, [userData]);

  if (loading) {
    return <Loading />;
  }

  const handleReplyChange = (issueId, value) => {
    // Update the reply state for the specific issue
    setIssueReplies((prevReplies) => ({
      ...prevReplies,
      [issueId]: value,
    }));
  };

  const handleReply = async (issueId) => {
    console.log(issueReplies, issueReplies.issueId);
    try {
      setLoading(true);
      const token = userData.token;
      const headers = {
        "x-auth-token": token,
      };

      // Send the reply data to the server
      await axios.post(
        `/issue/reply/${issueId}`,
        {
          reply: issueReplies.issueId, // Use the specific reply for this issue
        },
        { headers }
      );

      // Fetch the updated list of issues after adding a reply
      // const response = await axios.get("/issue");
      // setIssues(response.data);

      // Clear the reply state for this issue
      handleReplyChange(issueId, "");
      setLoading(false);
    } catch (error) {
      setError("Error submitting reply. Please try again.");
      console.error("Failed", error);
      setLoading(false);
    }
  };

  const handleDelete = async (issueId) => {
    try {
      setLoading(true);
      const token = userData.token;
      const headers = {
        "x-auth-token": token,
      };

      // Send a request to delete the issue
      await axios.post(`/issue/delete/${issueId}`, {}, { headers });

      // Fetch the updated list of issues after deleting one
      // const response = await axios.get("/issue");
      // setIssues(response.data);

      setLoading(false);
    } catch (error) {
      setError("Error deleting issue. Please try again.");
      console.error("Failed ", error);
      setLoading(false);
    }
  };
  console.log("issue ", issues);
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Customer Issues</h2>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">User ID</th>
            <th className="border border-gray-400 px-4 py-2">Subject</th>
            <th className="border border-gray-400 px-4 py-2">Description</th>
            <th className="border border-gray-400 px-4 py-2">Admin Reply</th>
            <th className="border border-gray-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue._id}>
              <td className="border border-gray-400 px-4 py-2">
                {issue.customer}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {issue.subject}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {issue.description}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {issue.replie.text ? (
                  issue.replie.text
                ) : (
                  <>
                    <input
                      type="text"
                      value={issueReplies[issue._id] || ""}
                      onChange={(e) =>
                        handleReplyChange(issue._id, e.target.value)
                      }
                      className="w-full border rounded px-3 py-2"
                    />
                    <button
                      onClick={() => handleReply(issue._id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2 mt-2"
                    >
                      Reply
                    </button>
                  </>
                )}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  onClick={() => handleDelete(issue._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 mt-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerSupportPage;

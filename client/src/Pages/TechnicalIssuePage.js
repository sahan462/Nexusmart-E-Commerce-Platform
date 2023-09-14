import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./../Components/Loading";
import { useContext } from "react";
import { UserContext } from "../AuthContext";

const TechnicalIssuePage = () => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [issues, setIssues] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userData } = useContext(UserContext);
  const [issueSubmitted, setIssueSubmitted] = useState();

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
  }, [userData, issueSubmitted]);

  if (loading) {
    return <Loading />;
  }
  console.log(issues);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const token = userData.token;
      const headers = {
        "x-auth-token": token,
      };
      // Send the issue data to the server to be saved in the database
      try {
        await axios.post(
          "/issue",
          {
            subject: subject,
            description: description,
          },
          { headers }
        );
      } catch (err) {
        console.error(err);
      }

      // // Add the new issue to the issues array immediately
      // setIssues([response.data, ...issues]);

      setSubject("");
      setDescription("");
      // add here
      setIssueSubmitted(Date.now());
      setLoading(false);
    } catch (error) {
      setError("Error submitting issue. Please try again.");
      setLoading(false);
    }
  };
  console.log("rendered");
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

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

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
                {issue.replie.text ? issue.replie.text : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Submit a New Issue:</h2>
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
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Issue
        </button>
      </form>
    </div>
  );
};

export default TechnicalIssuePage;

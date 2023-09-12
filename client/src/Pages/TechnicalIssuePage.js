import React, { useState } from "react";
import axios from "axios";

const TechnicalIssuePage = () => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the issue data to the server to be saved in the database
      await axios.post("/issue", {
        subject,
        description,
        status: "Open", // Assuming all submitted issues start as "Open"
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting issue:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Customer Support</h2>
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
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Issue
          </button>
        </form>
      )}
    </div>
  );
};

export default TechnicalIssuePage;

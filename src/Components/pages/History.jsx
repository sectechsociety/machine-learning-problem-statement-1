import React, { useState } from 'react';
import './history.css'; // Assuming you have this CSS for styling
import Sidebar from '../SideBar Section/Sidebar'

function History() {
  const [inputText, setInputText] = useState('');  // State to track input text
  const [historyData, setHistoryData] = useState(''); // State to store the result from Flask
  const [loading, setLoading] = useState(false); // State to manage loading indicator
  const [error, setError] = useState(null); // State to manage error messages

  // Function to fetch data from Flask backend
  const fetchQuery = async () => {
    setLoading(true);  // Set loading state to true when the request starts
    setError(null);  // Reset any previous error

    try {
      console.log('Sending request with inputText:', inputText); // Debugging log

      // Sending POST request to Flask server
      const response = await fetch('http://127.0.0.1:5000/generate_query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),  // Sending input text to Flask
      });

      // Check if the response was successful
      if (!response.ok) {
        throw new Error('Failed to fetch data from backend');
      }

      // Parse the JSON response
      const data = await response.json();
      console.log('Received data from Flask:', data); // Debugging log

      if (data.error) {
        throw new Error(data.error); // Handle errors returned by Flask
      }

      // Set the response data to the historyData state
      setHistoryData(data.boolean_query);
    } catch (error) {
      console.error('Error fetching query:', error);
      setError(error.message || 'There was an error generating the query');  // Show error message
    } finally {
      setLoading(false);  // Set loading state to false when the request finishes
    }
  };

  return (
    <div className="container">
    <Sidebar/>

      <h1 className="heading">History Page</h1>

      {/* Input field for symptoms */}
      <div className="input-container">
        <label htmlFor="symptoms">Enter Symptoms:</label>
        <input
          type="text"
          id="symptoms"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}  // Update inputText state
        />
      </div>

      {/* Button to trigger the fetchQuery function */}
      <button onClick={fetchQuery} disabled={loading} className="submit-btn">
        {loading ? 'Generating Query...' : 'Generate Query'}
      </button>

      {/* Display error message if there is one */}
      {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}

      {/* Display the generated Boolean query */}
      {historyData && (
        <div className="output-container">
          <h2>Generated Boolean Query</h2>
          <p>{historyData}</p>
        </div>
      )}
    </div>
  );
}

export default History;

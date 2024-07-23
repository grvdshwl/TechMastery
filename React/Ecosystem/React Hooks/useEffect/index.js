import React, { useState, useEffect } from "react";

function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    // Call the fetch function
    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <h2>Data Fetching Example</h2>
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <p>Title: {data.title}</p>
          <p>Completed: {data.completed ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}

export default DataFetchingComponent;

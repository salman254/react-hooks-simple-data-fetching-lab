// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  // State to store the dog image URL
  const [dogImage, setDogImage] = useState(null);
  // State to track loading status
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from the API
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // Set the dog image URL
        setIsLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Handle errors by stopping loading
      });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p> // Display loading message
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Display the dog image
      )}
    </div>
  );
}

export default App;
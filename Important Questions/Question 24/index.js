async function sendBlob(blob, filename, url) {
  // FormData is a built-in object used to send form data (including file uploads)
  // It automatically handles encoding the data as multipart/form-data, which is commonly used for file uploads.
  const formData = new FormData();

  // The append method adds the blob (file) to the FormData object.
  // The 'file' is the key under which the blob will be sent in the request body.
  // The 'filename' is the name to assign to the file being uploaded.
  formData.append("file", blob, filename);

  try {
    // The fetch API is used to send HTTP requests. Here, we send a POST request with the FormData as the body.
    // `fetch` is Promise-based, making it easier to handle asynchronous requests with async/await syntax.
    const response = await fetch(url, {
      method: "POST", // HTTP method (POST is commonly used for file uploads)
      body: formData, // FormData object containing the file to be uploaded
    });

    // Check if the response status code is in the successful range (200–299).
    // If not, throw an error with the HTTP status code.
    if (!response.ok) {
      // Handling specific HTTP errors (401 Unauthorized, 413 Payload Too Large, etc.)
      if (response.status === 401) {
        throw new Error("Unauthorized: Check your credentials.");
      } else if (response.status === 413) {
        throw new Error("Payload too large: Consider splitting the file.");
      } else {
        // General error for other unsuccessful responses.
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    }

    // The server's response is expected to be in JSON format, so we check the content-type.
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      // Parse the JSON response and log it to the console.
      // You can use the result for further processing, such as showing a success message.
      const result = await response.json();
      console.log("Upload successful:", result);
      return result;
    } else {
      // If the response is not in JSON format, throw an error.
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    // Handle any errors that occur during the fetch request or the response processing.
    // This includes network errors, HTTP errors, or issues with the response format.
    console.error("Error during blob upload:", error);
    throw error; // Re-throw the error to be handled by the calling code.
  }
}

// Usage example with error handling:
const blob = new Blob(["Hello, world!"], { type: "text/plain" }); // Example text file as a Blob
sendBlob(blob, "example.txt", "https://your-api-url.com/upload") // Replace with actual URL
  .then((response) => console.log("Response received:", response)) // Handle successful upload
  .catch((error) => console.error("Upload failed:", error)); // Handle failed upload

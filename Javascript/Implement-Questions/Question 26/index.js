//* Define a function to intercept fetch requests and responses
function fetchInterceptor(fetch) {
  return function (url, options) {

    console.log("Request URL:", url);
    console.log("Request Options:", options);

    return fetch(url, options)
      .then((response) => {
        console.log("Response:", response);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response;
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
        throw error;
      });
  };
}

window.fetch = fetchInterceptor(window.fetch);

fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

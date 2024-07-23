/**
 * Deserialize a JSON string into a JavaScript object manually.
 * @param {string} jsonString - The JSON string to deserialize.
 * @returns {object} - The deserialized JavaScript object.
 */
function deserializeJSON(jsonString) {
  // Remove leading/trailing whitespace
  jsonString = jsonString.trim();

  // Check if the string starts with '{' and ends with '}'
  if (jsonString[0] !== "{" || jsonString[jsonString.length - 1] !== "}") {
    console.error(
      "Invalid JSON format: Object must start and end with curly braces."
    );
    return null;
  }

  // Remove the outer curly braces
  jsonString = jsonString.slice(1, -1);

  // Split the string by commas
  const keyValuePairs = jsonString.split(",");

  // Initialize an empty object to store key-value pairs
  const jsonObject = {};

  // Iterate through each key-value pair
  for (let pair of keyValuePairs) {
    // Split the pair by the first colon to separate key and value
    const colonIndex = pair.indexOf(":");
    if (colonIndex === -1) {
      console.error(
        "Invalid JSON format: Key-value pair must contain a colon."
      );
      return null;
    }

    // Extract key and value
    const key = pair.slice(0, colonIndex).trim();
    const value = pair.slice(colonIndex + 1).trim();

    // Parse the key and value (removing quotes if necessary)
    const parsedKey =
      key.startsWith('"') && key.endsWith('"') ? key.slice(1, -1) : key;
    const parsedValue =
      value.startsWith('"') && value.endsWith('"') ? value.slice(1, -1) : value;

    // Assign key-value pair to the object
    jsonObject[parsedKey] = parsedValue;
  }

  return jsonObject;
}

// Example usage:
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const deserializedObject = deserializeJSON(jsonString);
console.log(deserializedObject); // Output: { name: 'John', age: '30', city: 'New York' }

//*     Implement a function that converts a JavaScript value into a JSON string.

function convertToJSON(value) {
  // Check if value is a primitive type
  if (
    typeof value === "number" ||
    typeof value === "boolean" ||
    value === null
  ) {
    return String(value);
  } else if (typeof value === "string") {
    // Escape special characters in string
    return '"' + value.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
  } else if (Array.isArray(value)) {
    // Convert array to JSON string
    const elements = value.map((element) => convertToJSON(element)).join(",");
    return "[" + elements + "]";
  } else if (typeof value === "object") {
    // Convert object to JSON string
    const properties = [];
    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        const propertyString = '"' + key + '":' + convertToJSON(value[key]);
        properties.push(propertyString);
      }
    }
    return "{" + properties.join(",") + "}";
  }
}

// Example usage:
const obj = { name: "John", age: 30, city: "New York" };
const jsonString = convertToJSON(obj);
console.log(jsonString);

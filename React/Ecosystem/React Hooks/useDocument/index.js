import { useEffect } from "react";

// Custom hook to dynamically set the document title
function useDocumentTitle(title) {
  useEffect(() => {
    // Update the document title when the component mounts
    document.title = title;

    // Cleanup: reset the document title when the component unmounts
    return () => {
      document.title = "React App"; // Set your default title here
    };
  }, [title]); // Re-run effect only if the 'title' prop changes
}

// Usage of the custom hook in a component
function TitleExample() {
  // Use the custom hook to dynamically set the document title
  useDocumentTitle("My Custom Title");

  return (
    <div>
      <p>Content of the component...</p>
    </div>
  );
}

export default TitleExample;

import React, { useState, useMemo } from "react";

function FilteredList({ data, filterTerm }) {
  // Memoized computation using useMemo to filter the list
  const filteredList = useMemo(() => {
    console.log("Filtering the list...");
    return data.filter((item) => item.includes(filterTerm));
  }, [data, filterTerm]); // Recalculate only if data or filterTerm changes

  return (
    <div>
      <p>Original List: {data.join(", ")}</p>
      <p>Filtered List: {filteredList.join(", ")}</p>
    </div>
  );
}

function MemoListExample() {
  const [filterTerm, setFilterTerm] = useState("");
  const data = ["apple", "banana", "cherry", "date", "grape"];

  return (
    <div>
      <label>
        Filter the list:
        <input
          type="text"
          value={filterTerm}
          onChange={(e) => setFilterTerm(e.target.value)}
        />
      </label>

      <FilteredList data={data} filterTerm={filterTerm} />
    </div>
  );
}

export default MemoListExample;

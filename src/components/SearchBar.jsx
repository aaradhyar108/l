import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(query);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        padding: "5px 10px",
        borderRadius: "5px",
        maxWidth: "400px",
        margin: "0 auto"
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ border: "none", outline: "none", flex: 1 }}
      />
      <FaSearch style={{ fontSize: "18px", color: "#333" }} />
    </div>
  );
}

export default SearchBar;

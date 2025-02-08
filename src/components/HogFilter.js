import React from "react";

function HogFilter({ setFilterGreased }) {
  return (
    <div className="filterWrapper">
      <label>
        <input
          type="checkbox"
          onChange={(e) => setFilterGreased(e.target.checked)}
        />
        Show only greased hogs
      </label>
    </div>
  );
}

export default HogFilter;

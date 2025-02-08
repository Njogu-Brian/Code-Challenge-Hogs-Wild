import React from "react";

function SortButtons({ setSortType }) {
  return (
    <div>
      <button onClick={() => setSortType("name")}>Sort by Name</button>
      <button onClick={() => setSortType("weight")}>Sort by Weight</button>
    </div>
  );
}

export default SortButtons;

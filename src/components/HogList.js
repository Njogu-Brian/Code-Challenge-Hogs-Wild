import React from "react";
import HogTile from "./HogTile";

function HogList({ hogs, hiddenHogs, hideHog }) {
  return (
    <div className="ui grid container">
      {hogs
        .filter(hog => !hiddenHogs.includes(hog.name)) // Hides hogs
        .map(hog => (
          <HogTile key={hog.name} hog={hog} hideHog={hideHog} />
        ))}
    </div>
  );
}

export default HogList;

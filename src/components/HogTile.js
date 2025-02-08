import React, { useState } from "react";

function HogTile({ hog, hideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui eight wide column pigTile">
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} width="200px" />
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      <button onClick={() => hideHog(hog.name)}>Hide Hog</button>

      {showDetails && (
        <div>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight} lbs</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Highest Medal: {hog["highest medal achieved"]}</p>
        </div>
      )}
    </div>
  );
}

export default HogTile;

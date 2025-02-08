import React, { useState } from "react";
import Nav from "./components/Nav";
import HogList from "./components/HogList";
import HogFilter from "./components/HogFilter";
import HogForm from "./components/HogForm";
import SortButtons from "./components/SortButtons";
import hogsData from "./porkers_data";
import "./index.css";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortType, setSortType] = useState(null);
  const [hiddenHogs, setHiddenHogs] = useState([]);

  const filteredHogs = filterGreased ? hogs.filter(hog => hog.greased) : hogs;

  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortType === "name") return a.name.localeCompare(b.name);
    if (sortType === "weight") return a.weight - b.weight;
    return 0;
  });

  const hideHog = (hogName) => {
    setHiddenHogs([...hiddenHogs, hogName]);
  };

  const addHog = (newHog) => {
    setHogs([...hogs, newHog]);
  };

  return (
    <div className="App">
      <Nav />
      <HogFilter setFilterGreased={setFilterGreased} />
      <SortButtons setSortType={setSortType} />
      <HogForm addHog={addHog} />
      <HogList hogs={sortedHogs} hiddenHogs={hiddenHogs} hideHog={hideHog} />
    </div>
  );
}

export default App;

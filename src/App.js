import React, { useState } from "react";
import "./App.css";

function App() {
    const ledZepSongs = [
        "Whole Lotta Love",
        "Ramble On",
        "Stairway to Heaven",
        "In My Time of Dying",
    ];

    const [sortSongs, setSortSongs] = useState(ledZepSongs);

    return <div className="App"></div>;
}

export default App;

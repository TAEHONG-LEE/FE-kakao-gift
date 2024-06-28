import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@stories/Button";
import { PrimaryArgs } from "@stories/Button.stories";

function App() {
    return (
        <div className="App">
            <Button {...PrimaryArgs} />
        </div>
    );
}

export default App;
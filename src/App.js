import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WelcomePage from "./components/pages/WelcomePage";
import "rsuite/lib/styles/index.less";
import "./App.less";

function App() {
  return (
    <div className="App">
      <WelcomePage />
    </div>
  );
}

export default App;

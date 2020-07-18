import React from "react";
// Style
import "./App.css";
import "rsuite/lib/styles/index.less";
import "./App.less";
// Translation
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.js";

// Provider inject into all child component
import { Provider } from "mobx-react";
// Route
import RouteHandler from "./routes/router";

const stores = {};

function App() {
  return (
    <div className="App">
      <Provider {...stores}>
        <RouteHandler />
      </Provider>
    </div>
  );
}

export default App;

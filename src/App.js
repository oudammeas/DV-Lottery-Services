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
// Import Stores
import commonStore from "./stores/commonStore";

// Import Auth0 
import Auth0ProviderWithHistory from "./components/elements/Auth/Auth0ProviderWithHistory";


const stores = {
  commonStore,
};


function App() {
  return (
    <Auth0ProviderWithHistory>
      <div className="App">
        <Provider {...stores}>
          <RouteHandler />
        </Provider>
      </div>
    </Auth0ProviderWithHistory>
  );
}



export default App;

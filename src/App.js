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
import Routes from "./routes/router";
import { BrowserRouter } from "react-router-dom";

// Import Stores
import commonStore from "./stores/commonStore";

// Import Auth0 
import Auth0ProviderWithHistory from "./components/elements/Auth/Auth0ProviderWithHistory";

import { useAuth0 } from "@auth0/auth0-react";

import Loading from "./components/elements/Loading";


// // history to move from page to page
// import { createBrowserHistory } from "history";

// const history = createBrowserHistory();

const stores = {
  commonStore,
};

function App() {

  const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div className="App">
      {/* <BrowserRouter history={history}> */}
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <Provider {...stores}>
            <Routes />
          </Provider>
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </div>
  );
}

export default App;

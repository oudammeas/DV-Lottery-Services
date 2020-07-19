/**
 * INSTRUCTION:
 * 1. import component pages in import
 * 2. add new route path to route list
 */

// Import module
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
// 1 . import Pages
import WelcomePage from "../components/pages/WelcomePage";
import RegisterPage from "../components/pages/RegisterPage";

// history to move from page to page
import { createBrowserHistory } from "history";

// 2.  routes list
export const route = [
  { path: "/", Component: WelcomePage, name: "Welcome Page" },
  { path: "/register-page", Component: RegisterPage, name: "Register Page" },
];

const history = createBrowserHistory();

/**
 * generate a switch with all routes to be used in App.js
 */
const RouteHandler = () => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        {route.map((page) => (
          <Route path={page.path} exact component={page.Component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default RouteHandler;

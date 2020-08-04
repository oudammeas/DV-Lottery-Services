/**
 * INSTRUCTION:
 * 1. import component pages in import
 * 2. add new route path to route list
 */

// Import module
import React from "react";
import { Route, Switch, BrowserRouter, StaticRouter } from "react-router-dom";

// 1 . import Pages
import WelcomePage from "../components/pages/WelcomePage";
import RegisterPage from "../components/elements/Auth/RegisterButton";
import FaqsPage from "../components/pages/FaqsPage";
import ContactUsPage from "../components/pages/ContactUsPage";
import NewCandidatesPage from "../components/pages/NewCandidatesPage";
import SelectedCandidatesPage from "../components/pages/SelectedCandidatesPage";
import LoginPage from "../components/elements/Auth/LoginButton";
import ProfilePage from "../components/pages/ProfilePage";
import StatusPage from "../components/pages/StatusPage";
import AppointmentPage from "../components/pages/AppointmentPage";

// // history to move from page to page
// import { createBrowserHistory } from "history";

// 2.  routes list
export const route = [
  { path: "/", Component: WelcomePage, name: "Welcome Page" },
  { path: "/register", Component: RegisterPage, name: "Register Page" },
  { path: "/faqs", Component: FaqsPage, name: "FAQs Page" },
  { path: "/contact-us", Component: ContactUsPage, name: "Contact Us Page" },
  { path: "/new-candidates", Component: NewCandidatesPage, name: "New Candidates Page" },
  { path: "/selected-candidates", Component: SelectedCandidatesPage, name: "Selected Candidates Page" },
  { path: "/login", Component: LoginPage, name: "Login Page" },
  { path: "/profile", Component: ProfilePage, name: "Profile Page" },
  { path: "/status", Component: StatusPage, name: "Status Page" },
  { path: "/appointment", Component: AppointmentPage, name: "Appointment Page" }

];

// const history = createBrowserHistory();

/**
 * generate a switch with all routes to be used in App.js
 */
const Routes = () => {
  return (
    <Switch>
      {route.map((page) => (
        <Route path={page.path} exact component={page.Component} />
      ))}
    </Switch>
  );
};

export default Routes;

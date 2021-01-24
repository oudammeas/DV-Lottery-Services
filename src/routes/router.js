/**
 * INSTRUCTION:
 * 1. import component pages in import
 * 2. add new route path to route list
 */

// Import module
import React from 'react'
import { Route, Switch, BrowserRouter, StaticRouter } from 'react-router-dom'
import PrivateRoute from '../components/elements/PrivateRoute'
import { v4 as uuidv4 } from 'uuid'
// 1 . import Pages
import WelcomePage from '../components/pages/WelcomePage'
import RegisterPage from '../components/elements/Auth/RegisterButton'
import FaqsPage from '../components/pages/FaqsPage'
import ContactUsPage from '../components/pages/ContactUsPage'
import NewCandidatesPage from '../components/pages/NewCandidatesPage'
import SelectedCandidatesPage from '../components/pages/SelectedCandidatesPage'
import AuthenticatorPage from '../components/pages/AuthenticatorPage'
import ProfilePage from '../components/pages/ProfilePage'
import StatusPage from '../components/pages/StatusPage'
import AppointmentPage from '../components/pages/AppointmentPage'

// // history to move from page to page
// import { createBrowserHistory } from "history";

// 2.  routes list
export const route = [
  { path: '/', Component: WelcomePage, name: 'common.routes.home', private: 0 },
  { path: '/register', Component: RegisterPage, name: 'common.routes.register', private: 0 },
  { path: '/faqs', Component: FaqsPage, name: 'common.routes.faqs', private: 0 },
  { path: '/contact-us', Component: ContactUsPage, name: 'common.routes.contact-us', private: 0 },
  { path: '/new-candidates', Component: NewCandidatesPage, name: 'common.routes.new-candidates', private: 0 },
  { path: '/selected-candidates', Component: SelectedCandidatesPage, name: 'common.routes.selected-candidates', private: 0 },
  { path: '/authenticator', Component: AuthenticatorPage, name: 'common.routes.authenticator', private: 0 },
  { path: '/profile', Component: ProfilePage, name: 'common.routes.profile', private: 1 },
  { path: '/status', Component: StatusPage, name: 'common.routes.status', private: 1 },
  { path: '/appointment', Component: AppointmentPage, name: 'common.routes.appointment', private: 0 },
]

// menu routes list

export const menu = [
  { path: '/', Component: WelcomePage, name: 'common.routes.home', private: 0 },
  { path: '/faqs', Component: FaqsPage, name: 'common.routes.faqs', private: 0 },
  { path: '/contact-us', Component: ContactUsPage, name: 'common.routes.contact-us', private: 0 },
  { path: '/profile', Component: ProfilePage, name: 'common.routes.profile', private: 1 },
  { path: '/status', Component: StatusPage, name: 'common.routes.status', private: 1 },
]

// const history = createBrowserHistory();

/**
 * generate a switch with all routes to be used in App.js
 */
const Routes = () => {
  return (
    <Switch>
      {route.map(page =>
        page.private ? (
          <PrivateRoute path={page.path} exact component={page.Component} key={uuidv4()} />
        ) : (
          <Route path={page.path} exact component={page.Component} />
        ),
      )}
    </Switch>
  )
}

export default Routes

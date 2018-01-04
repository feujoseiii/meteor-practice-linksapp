import { Meteor } from 'meteor/meteor';
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';

import history from '../util/history';

import Homepage from '../ui/Homepage';
import Login from '../ui/Login';
import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';

const unauthenticatedRoutes = [
    '/',
    '/signup'
];

const authenticatedRoutes = [
    '/links',
    '/login',
];

const ignoredRoutesOnAuthenticated = [
    '/login'
];

export const onAuthChange = (isAuthenticated) => {
    const currentLocation = history.location.pathname;
    const isAuthenticatedPage = authenticatedRoutes.includes(currentLocation);
    const isUnauthenticatedPage = unauthenticatedRoutes.includes(currentLocation);
  
    if (isUnauthenticatedPage && isAuthenticated) {
      history.replace('/links');
    } else if (isAuthenticatedPage && !isAuthenticated) {
      if (!ignoredRoutesOnAuthenticated.includes(currentLocation)) {
        history.replace('/');
      } 
    }
};

export const routes = (
    <Router history={history}>
        <div>
            <Switch>
                <Route path='/' component={Homepage} exact={true} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/links' component={Link} />
                <Route path='*' component={NotFound} />
            </Switch>
        </div>
    </Router>
);
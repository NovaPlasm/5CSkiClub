import React from "react";
import { render } from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from "react-apollo";
import ApolloClient from 'apollo-boost';
import { Provider } from "react-redux";

import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import * as serviceWorker from './serviceWorker';
import { theme } from './assets/theme';

import App from "./App";

const history = createBrowserHistory();
const client = new ApolloClient({
    uri: "http://localhost:3001/graphql"
});

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "./login";
    }
  }

const Root = () => (
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Router history={history}>
                    <Route component={App} />
                </Router>
            </Provider>
        </ThemeProvider>
    </ApolloProvider>
);

render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
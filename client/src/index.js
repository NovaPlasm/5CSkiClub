import React from "react";
import { render } from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from "react-apollo";
import ApolloClient from 'apollo-boost';
import * as serviceWorker from './serviceWorker';
import { theme } from './assets/theme';

import App from "./App";

const history = createBrowserHistory();
const client = new ApolloClient({
    uri: "http://localhost:3001/graphql"
});

const Root = () => (
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <Router history={history}>
                <Route component={App} />
            </Router>
        </ThemeProvider>
    </ApolloProvider>
);

render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
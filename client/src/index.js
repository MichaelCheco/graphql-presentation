import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
// httpLink connects your ApolloClient instance with the GraphQL API
const httpLink = createHttpLink({
  uri: "http://localhost:4000"
});
// Instantiate ApolloClient by passing in the httpLink and a new instance of InMemoryCache
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
// Wrap the App with the higher-order component ApolloProvider that gets passed the client as a prop
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// src/apollo.js

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // Replace 'YOUR_GITHUB_ACCESS_TOKEN' with your actual GitHub access token
  const token = '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';
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;

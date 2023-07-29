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

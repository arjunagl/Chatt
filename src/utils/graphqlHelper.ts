import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const chatServerUrl = 'http://192.168.99.100:3000/chatt'; // process.env.GRAPHQL_ENDPOINT;

const apolloClient = new ApolloClient({
  link: createHttpLink({ uri: chatServerUrl }),
  cache: new InMemoryCache(),
});

export default apolloClient;

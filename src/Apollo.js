// apollo.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import createApolloClient from './GraphqlService';

const client = createApolloClient();

export default client;

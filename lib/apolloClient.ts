import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

export const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.spacex.land/graphql/', fetch }),
  cache: new InMemoryCache(),
});

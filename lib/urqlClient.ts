import {
  createClient,
  ssrExchange,
  dedupExchange,
  cacheExchange,
  fetchExchange
} from 'urql';

const isServerSide = typeof window === 'undefined';
export const ssrCache = ssrExchange({ isClient: !isServerSide });
export const urqlClient = createClient({
  url: 'https://api.spacex.land/graphql/',
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange]
});

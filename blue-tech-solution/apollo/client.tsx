import { ApolloClient, InMemoryCache, createHttpLink, DefaultOptions } from '@apollo/client';

const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: "cache-and-network",
      errorPolicy: "ignore",
      notifyOnNetworkStatusChange: true
    }
  };
const cache = new InMemoryCache({
    resultCaching: false,
});

const link = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
})
;
const client = new ApolloClient({
    link,
    cache,
    defaultOptions,
});

export default client;
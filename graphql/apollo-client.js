import {  ApolloClient,  InMemoryCache,  createHttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new createHttpLink({
    uri: 'https://heyday-test-shop.myshopify.com/api/2021-07/graphql.json',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token' : '6b469dd5e30977cf5ef79fa304b6e916'
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
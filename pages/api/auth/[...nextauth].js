import NextAuth from "next-auth"
import UserOperations from '../../../graphql/operations/user'
import { ApolloClient, InMemoryCache,  createHttpLink } from "@apollo/client"
import CredentialsProvider  from "next-auth/providers/credentials"

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

export const authOptions = {
  providers: [
    CredentialsProvider({
        name: "Shopify Auth",
        credentials: {
          email: {
            label: 'email',
            type: 'email',
            placeholder: 'name@email.com'
          },
          password: {
            label: 'password',
            type: 'password'
          }
        },
        
        async authorize(credentials, req) {

          const { data } = await client.mutate({
            mutation: UserOperations.Mutations.createAccessToken,
            variables: { input: { 
              email: credentials.email,
              password: credentials.password
            }}
          })

          const user = await client.query({
            query: UserOperations.Queries.getUser,
            variables: { token:  data.customerAccessTokenCreate.customerAccessToken.accessToken }
          });

          if (user) {
            return user;
          }
          
          return null
        }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
        return { ...token, ...user };
    },
    async session({ session, token, user }) {
        // Send properties to the client, like an access_token from a provider.
        session.user = token;
        return session;
    },
  },
}
export default NextAuth(authOptions)
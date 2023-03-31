import '@/styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import { builder } from '@builder.io/react'
import Layout from '../components/global/Layout'
import type { AppProps } from 'next/app'
import Script from 'next/script';
import { SessionProvider } from "next-auth/react"
import { ApolloProvider} from '@apollo/client';
import client from '../graphql/apollo-client'
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../chakra/theme'

const BUILDER_API_KEY = 'ea37859a8c60492897e611f94cbde782'
builder.init(BUILDER_API_KEY)


export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <Layout>
            <Script async strategy='beforeInteractive' src='https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UFdULB' />
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </ApolloProvider>
    </SessionProvider>
  )
}

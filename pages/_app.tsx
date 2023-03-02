import {Fragment} from 'react'
import '@/styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import { builder } from '@builder.io/react'
import Layout from '../components/global/Layout'
import type { AppProps } from 'next/app'
import Script from 'next/script';

const BUILDER_API_KEY = 'ea37859a8c60492897e611f94cbde782'
builder.init(BUILDER_API_KEY)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script async src='https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UFdULB' />
    </>
  )
}

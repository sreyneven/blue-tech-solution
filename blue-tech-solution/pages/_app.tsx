import '../styles/globals.css'
import {ApolloProvider} from "@apollo/client"
import client from '../apollo/client'
import localFont from '@next/font/local'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const myFont = localFont({
  src: [
    {
      path: '../public/fonts/Recoleta-Bold.ttf',
      weight: '700',
    },
    {
      path: '../public/fonts/Recoleta-Bold.ttf',
      weight: '700',
    },
  ],
  fallback: ['Helvetica', 'ui-sans-serif'],
})
function MyApp({ Component, pageProps }:any) {
  useEffect(()=> {
    AOS.init({
      duration: 1500,
      once: false, 
    })
  })
  return (
        <ApolloProvider client={ client } >
            <style jsx global>{`
              :root {
                --font-myFont: ${myFont.style.fontFamily};
              }
            `}</style>
            <Component {...pageProps} />
        </ApolloProvider>
  )
}
export default MyApp

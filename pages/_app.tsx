import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax'  // TODO remove that shgit

function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}

export default App

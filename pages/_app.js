import '../styles/globals.css'
import {useRouter} from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  if (router.query.cursed) {
    return <>
      <style>{`:root, * { font-family: 'Comic Sans', 'Comic Sans MS', 'cursive' !important }`}</style>
      <Component {...pageProps} />
    </>
  }

  return <Component {...pageProps} />
}

export default MyApp

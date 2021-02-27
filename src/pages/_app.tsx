import '../styles/global.css'

import { ChallengesContext, ChallengesContextProvider } from '../contexts/ChallengeContext'

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp

import ScrollToTop from 'react-scroll-to-top'
import NextTopLoader from 'nextjs-toploader'

import { ScrollToTopRouter } from './components/shared'
import Routes from './routes'

const App = () => {
  return (
    <div className="app">
      <NextTopLoader color="#e50000" />
      <ScrollToTop smooth width="24" height="24" className="flex items-center justify-center" />
      <ScrollToTopRouter />

      {Routes()}
    </div>
  )
}
export default App

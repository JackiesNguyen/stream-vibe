import './styles/index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-select-search/style.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Router>
  </React.StrictMode>,
)

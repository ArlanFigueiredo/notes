import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'
import GlobalStyles from './styles/global.js'
import { Index } from './pages/Details/Index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Index />
    </ThemeProvider>
  </React.StrictMode>,
)

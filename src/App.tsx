import React from 'react'

/**
 * Context.
 */
import { Context } from './components/Context/components/Context'

/**
 * Routes.
 */
import { Routes } from './Routes'

/**
 * Global styles.
 */
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  return (
    <Context>
      <Routes />

      <GlobalStyles />
    </Context>
  )
}

export default App

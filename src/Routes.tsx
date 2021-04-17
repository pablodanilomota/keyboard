import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/**
 * Available routes.
 */
import { Result } from './pages/Result'
import { Splash } from './pages/Splash'
import { Keyboard } from './pages/Keyboard'

/**
 * Enabled routes.
 */
export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Splash} />
        <Route path="/keyboard" component={Keyboard} />
        <Route path="/result" component={Result} />
      </Switch>
    </Router>
  )
}

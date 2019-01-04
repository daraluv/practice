import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'

import Home from './home'
import Welcome from './welcome'

const Routes = () => (
  <HashRouter>
    <div>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/welcome" component={Welcome}/>
      </Switch>
    </div>
  </HashRouter>
)

const App = () => (
  <Routes />
)

export default App
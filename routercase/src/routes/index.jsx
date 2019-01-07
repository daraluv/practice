import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
import Home from './home'
import Welcome from './welcome'
import Sigin from './sigin'
import Login from './login'
import List from './list'
import {PrivateRoute, fakeAuth} from './privateRoute'

const Routes = () => (
  <HashRouter>
    <div>
      <Route exact path="/" render={() => <Redirect to="/Welcome" />} />
      <Switch>
        <Route path="/welcome" component={Welcome}/>
        <Route path="/sigin" component={Sigin}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/home" component={Home} >
          
        </PrivateRoute>
      </Switch>
    </div>
  </HashRouter>
)

const App = () => (
  <Routes />
)

export default App
import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
// import Sigin from '../sigin'
// import Login from '../login'

const Welcome = () => (
  <div>
    <div>启动页</div>
    <button><Link to="/login">login</Link></button>
    <button><Link to="/sigin">sigin up</Link></button>
  </div>
)

export default Welcome

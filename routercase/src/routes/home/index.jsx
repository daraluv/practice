import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import List from '../list'

const Home = () => (
  <div>
    <ul>
      <li><Link to="/List">products</Link></li>
      <li><Link to="/List">inspirations</Link></li>
      <li><Link to="/List">shop</Link></li>
    </ul>
    <Route path="/:id" component={List} />
  </div>
)

export default Home


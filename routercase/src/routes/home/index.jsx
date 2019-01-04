import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <p>this is home page</p>
    <Link to="/welcome">go to welcome</Link>
  </div>
)

export default Home


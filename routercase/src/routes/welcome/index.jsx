import React from 'react'
import { Link } from 'react-router-dom'


const Welcome = () => (
  <div>
    <button><Link to="/login">login</Link></button>
    <button><Link to="/sigin">sigin up</Link></button>
  </div>
)

export default Welcome

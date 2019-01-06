import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ match }) => (
  <div>
    <Link to="/about">{match.params.id}</Link>
  </div>
)

export default List


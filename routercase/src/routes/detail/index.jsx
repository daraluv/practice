import React from 'react'
import { Link } from 'react-router-dom'

console.log(123)
const About = () => (
  <div>
    <p>this is about page</p>
    <Link to="/home">go to Home</Link>
  </div>
)

export default About

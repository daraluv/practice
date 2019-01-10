import React from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'
import Lista from './lista'
import Listb from './listb'
import Listc from './listc'
import './style.css';

const Home = () => (
  <div>
    <ul>
    	<li><NavLink to="/home/lista" activeClassName="active">products</NavLink></li>
    	<li><NavLink to="/home/listb" activeClassName="active">inspirations</NavLink></li>
    	<li><NavLink to="/home/listc" activeClassName="active">shop</NavLink></li>
    </ul>
    <div>
       <Route path="/home/lista" component={Lista} />
       <Route path="/home/listb" component={Listb} />
       <Route path="/home/listc" component={Listc} />
    </div>
  </div>
)

export default Home


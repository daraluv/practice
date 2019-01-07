/**
 * Home
 */
import React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import Recommend from './Recommend';
import Community from './Community';
import Profile from './Profile';

import './style.css';

class Home extends React.Component {
  componentDidMount() {
    document.title = '首页';
  }

  render() {
    return (
      <div className="home_container">
        <div className="content">
          <Route exact path="/home" render={() => <Redirect to="/home/recommend" />} />
          <Route exact path="/home/recommend" component={Recommend} />
          <Route path="/home/community" component={Community} />
          <Route exact path="/home/profile" component={Profile} />
        </div>
        <div className="nav">
          <NavLink to="/home/recommend" activeClassName="active">推荐</NavLink>
          <NavLink to="/home/community" activeClassName="active">社区</NavLink>
          <NavLink to="/home/profile" activeClassName="active">我的</NavLink>
        </div>
      </div>
    )
  }
}

export default Home;

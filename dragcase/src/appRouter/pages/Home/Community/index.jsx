/**
 * 社区
 */
import React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import Flow from './Flow';
import Hot from './Hot';

import './style.css';

class Community extends React.Component {
  componentDidMount() {
    document.title = '推荐';
  }

  render() {
    return (
      <div className="com_container">
        <div className="nav">
          <NavLink to="/home/community/flow" activeClassName="active">新帖</NavLink>
          <NavLink to="/home/community/hot" activeClassName="active">热帖</NavLink>
        </div>
        <div className="content">
          <Route exact path="/home/community" render={() => <Redirect to="/home/community/flow" />} />
          <Route path="/home/community/flow" component={Flow} />
          <Route path="/home/community/hot" component={Hot} />
        </div>
      </div>
    )
  }
}

export default Community;

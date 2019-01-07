/**
 * 注册
 */
import React from 'react';


class Register extends React.Component {
  componentDidMount() {
    document.title = '注册';
  }

  navToIndex = () => {
    this.props.history.push('/home');
  }

  render() {
    return (
      <div>
        <h1>注册页</h1>
        <button onClick={this.navToIndex}>回到首页</button>
      </div>
    )
  }
}

export default Register;

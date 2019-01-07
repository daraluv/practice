/**
 * Auth
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

class Auth extends React.Component {
  state = {
    account: ''
  }

  componentDidMount() {
    document.title = '登陆';
  }

  login = () => {
    const { account } = this.state;
    const { history } = this.props;

    if (!account) {
      return alert('请输入用户名！');
    }

    /** 模拟一定时间后登录成功，并跳转到Home页 */
    setTimeout(() => {
      history.push('/home');
    }, 100);
  }

  inputChange = (e) => {
    this.setState({
      account: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>登录</h1>
        <div>
          <input size="20" type="text" placeholder="输入任意内容登录" onChange={this.inputChange} />
        </div>
        <button onClick={this.login}>登录</button>
        <div>忘记密码，点击<Link to="/register">注册</Link></div>
      </div>
    )
  }
}

export default Auth;

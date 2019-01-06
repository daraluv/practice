import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import {fakeAuth} from '../privateRoute'


class Login extends React.Component {
  state = {};
  
  login = () => {
    if(this.state.inputVal){
      fakeAuth.authenticate(() => {
        this.setState({ isAuthenticated: true });
      });
    }else{
      alert('请输入用户名！')
    }

  };

  setSigin = (e) => {
    this.setState({
      inputVal: e.target.value
    });
  }

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { isAuthenticated } = this.state;

    if (isAuthenticated) return <Redirect to="/home" />;

    console.log(from,this.props)

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
         <p>
          <input size="10" placeholder="name" onChange={(e)=>this.setSigin(e)}/>
        </p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default Login

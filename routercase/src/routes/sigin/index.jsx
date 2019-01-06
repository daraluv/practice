import React from 'react'
import { Link } from 'react-router-dom'
import {fakeAuth} from '../privateRoute'
import { Route, Redirect } from 'react-router'

class Sigin extends React.Component {
  state = {};

  setSigin =(e) => {
   this.setState({
      inputVal: e.target.value
    });
  }

  goSigin = () => {
    if(this.state.inputVal){
      fakeAuth.authenticate(() => {
        this.setState({ isAuthenticated: true });
      });
    }else{
      alert('请输入用户名！')
    }

  };


  render() {
    let { isAuthenticated } = this.state;
    if (isAuthenticated) return <Redirect to="/home" />;

    return(
      <div>
        <p>
          <input size="10" placeholder="name" onChange={(e)=>this.setSigin(e)}/>
        </p>
        <button onClick={this.goSigin}>Sigin up</button>
      </div>
      
    )
  }
}

export default Sigin

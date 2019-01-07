/**
 * 启动页， 4秒之后自动跳转到Home页
 */

import React from 'react';
import { Redirect } from 'react-router';
import './common.css';

class Splash extends React.Component {
  state = {
    count: 5,
    isAuth: false
  }

  componentDidMount() {
    document.title = '启动页';
    this.timer1 = setInterval(() => {
      const { count } = this.state;

      if (count >= 0) {
        this.setState({
          count: this.state.count - 1
        })
      }
    }, 1000);

    /** 判断是否已经登录，这个过程为异步，假设此处使用了1s时间得到判断结果 */
    this.timer2 = setTimeout(() => {
      this.setState({
        // 获得一个随机结果
        isAuth: parseInt(Math.random() * 10) % 2 === 0
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer1);
    clearTimeout(this.timer2);
  }

  render() {
    const { count, isAuth } = this.state;
    return (
      <>
        {count >= 0 ? (
          <div className="splash_container">
            <div>当前为启动页，{count}秒之后自动跳过</div>
            <div className="count">{count}</div>
          </div>
        ) : (
          <Redirect to={isAuth ? '/home' : '/auth'} />
        )}
      </>
      
    )
  }
}

export default Splash;

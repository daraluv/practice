import React from 'react';

class App extends React.Component {
  static defaultProps = {
    index: 0
  }

  state = {
    bar: 20
  }

  /** only once */
  componentWillMount() {}

  /** only once */
  componentDidMount() {
    this.setState((preState, props) => {
      console.log(preState, props);

      return {
        bar: preState.bar + 20
      }
    }, () => {
      console.log(this.state.bar, 'callback mount');
    })

    console.log(this.state.bar, 'mount');
  }

  render() {
    const { bar } = this.state;
    console.log(bar);
    return (
      <h1>app class, {bar}</h1>
    )
  }
}

export default App;


/**
 * 1. 如何创建组件
 * 2. 如何通过点进入的方式查看函数的具体实现
 * 3. 简单了解了生命周期
 * 4. state的特性，如何访问，如何设置，
 *  - 构造函数里
 *  - 表示组件的内部状态，并且每次状态改变，组件都会自动重新渲染
 *  - 通过 this.state.bar 的方式访问值
 *  - 通过 this.setState 的方式改变值
 * 5. setState的特性
 *  - 是一个异步方法
 *  - 接收两个参数，第一个参数可以直接接收改变值的对象，也可以是一个回调，通过返回对象改变值
 *  - 第二个参数也是一个回调，在设置的值被改变之后执行
 * 
 * 重点理解一下上面代码的执行顺序
 */
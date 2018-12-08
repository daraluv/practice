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
 * 5. setState的特性
 */
import React, { Component } from 'react';

const WithButton  = (BaseComponent) => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data: ['首页', '新闻', '电影', '电视剧'],
        currentIndex: 0
      }
    }

    switchTo = (index) => {
      this.setState({
        currentIndex: index
      });
    }

    /** 删除第几个 */
    remove = (index) => {
      const { data, currentIndex } = this.state;

      if (index - 1 > data.length || index < 1) {
        return;
      }

      data.splice(index - 1, 1);
      const _cur = currentIndex === index - 1 ? 0 : currentIndex;
      
      this.setState({
        data,
        currentIndex: _cur
      })
    }


    render() {
      const newsProps = {
        data: this.state,
        remove: this.remove,
        switchTo: this.switchTo,
      }

      return <BaseComponent {...this.props} {...newsProps}/>
    }
  }

}
export default WithButton;


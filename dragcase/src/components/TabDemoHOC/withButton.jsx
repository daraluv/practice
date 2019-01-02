import React from 'react';

function withButton(Component) {
  return class BaseComponent extends React.Component {
    state = {
      data: ['首页', '新闻', '电影', '电视剧'],
      currentIndex: 0
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
      const { data, currentIndex } = this.state;

      return <Component {...this.props} data={data} currentIndex={currentIndex} remove={this.remove} switchTo={this.switchTo} />
    }
  }
}

export default withButton;
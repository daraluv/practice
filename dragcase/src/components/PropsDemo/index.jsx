import React from 'react';

class PropsDemo extends React.Component {
  render() {
    console.log(this.props);
    return (
      <h1>Props demo</h1>
    )
  }
}

export default PropsDemo;

/**
 * 1. props通过属性的方式传入到组件内部，并且通过 this.props 访问
 * 2. 在组件内部无法直接修改props
 * 3. 在外部修改props之后，组件也会重新渲染一次
 * 4. 生命周期图片地址  https://upload-images.jianshu.io/upload_images/5287253-bd799f87556b5ecc.png?imageMogr2/auto-orient/
 */

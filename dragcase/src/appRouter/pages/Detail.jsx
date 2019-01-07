/**
 * 帖子详情内容
 */
import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    document.title = '帖子标题';

    const id = match.params.id;

    // 通常会使用id去请求当前帖子的具体内容
    console.log(id);
  }

  render() {
    const { location } = this.props;
    const { title, author } = location.state;
    return (
      <div className="det_container">
        <h1>{title}</h1>
        <p>{author}</p>
      </div>
    )
  }
}

export default Detail;

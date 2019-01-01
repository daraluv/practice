import React from 'react';
import WithButton from './WithButton.js';
import './style.css';

// class Btns extends React.Component {
//   render() {
//     const { data, remove, switchTo } = this.props;
//     return (
//       <div className="btns_container">
//         {data.map((item, i) => (
//           <button key={i} onClick={() => switchTo(i)}>{item}</button>
//         ))}

//         <button onClick={() => remove(data.length)}>删除最后一页</button>
//       </div>
//     )
//   }
// }

class Btn extends React.Component {
  render() {
    let {data, index, switchTo, remove} = this.props;
    // console.log(data)

    return (
      <div className="btns_container">
        {data.map((item, i) => (
          <button key={i} onClick={() => switchTo(i)}>{item}</button>
        ))}
        <button onClick={() => remove(data.length)}>删除最后一页</button>
      </div>
    )
  }
}

export default WithButton(Btn);
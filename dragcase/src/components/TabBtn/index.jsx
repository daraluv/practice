import React from 'react';
import './style.css'


class TabBtn extends React.Component {
  constructor(props) {
    super(props);
    this.titleArr = this.props.titleArr || [];
    this.state = {
      inputVal: '',
      titleArr: this.titleArr,
    };
  }

  addHandle = () => {
    this.setState({
      titleArr: this.titleArr.push('新标题')
    });   
  }

  removeHandle = () => {
    if(this.titleArr.length > 0) {
      this.setState({
        titleArr: this.titleArr.pop()
      }); 
    };
  }

  getinputVal = (e) => {
    this.setState({
      inputVal: e.target.value,
    });
  };

  setValueHandle = () => {
    const {inputVal} = this.state;

    if(inputVal > 0 && inputVal <= this.titleArr.length) {
      this.setState({
        titleArr: this.titleArr.splice(inputVal-1, 1)
      }); 
    }else {
      console.log(`第${inputVal}页不存在`);
    };  
  }

  render() {
    return (
      <div className="btnGroup" onClick={this.props.changeHandler}>
        <button onClick={(e)=>this.addHandle(e)}>添加一页</button>
        <button onClick={(e)=>this.removeHandle(e)}>删除一页</button>
        <div>
           删除第<input type="tel" value={this.state.inputVal} onChange={this.getinputVal}/>页
           <button onClick={this.setValueHandle}>确定</button>
        </div>
      </div>     
    )
  }
}

export default TabBtn;
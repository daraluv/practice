import React, { Component } from 'react';

const TabController  = (BaseComponent, data) => {
  return class TabController extends Component {
    constructor(props) {
      super(props)
      this.state = {
        inputVal: '',
        current: 0,
        titleArr: data || ['首页', '新闻', '电影', '电视剧'],
        contentArr: data || ['第1页', '第2页', '第3页', '第4页'] 
      };
    }

    changeHandler = () => {
      this.setState({
        titleArr: this.state.titleArr,
      });
    }

    setCurrent = (index) => {
      this.setState({
         current: index
      });
    }

    addHandle = () => {
      this.setState({
        titleArr: this.state.titleArr.push('新标题')
      }); 
      console.log(this.state.titleArr)  
    }

    removeHandle = () => {
      if(this.state.titleArr.length > 0) {
        this.setState({
          titleArr: this.state.titleArr.pop()
        }); 
      };
    }

    getinputVal = (e) => {
      this.setState({
        inputVal: e.target.value
      });
    };

    setValueHandle = () => {
      const {inputVal} = this.state;
      console.log(inputVal)
      if(inputVal > 0 && inputVal <= this.state.titleArr.length) {
        this.setState({
          titleArr: this.state.titleArr.splice(inputVal-1, 1)
        }); 
      }else {
        console.log(`第${inputVal}页不存在`);
      };  
    }

    render() {
      console.log('1',this.state.titleArr)

      const newsProps = {
        changeHandler: this.changeHandler,
        removeHandle: this.removeHandle,
        getinputVal: this.getinputVal,
        setValueHandle: this.setValueHandle,
        addHandle: this.addHandle,
        setCurrent: this.setCurrent,
        value: this.state.inputVal
      }

      return <BaseComponent data={this.state} {...this.props} {...newsProps}/>
    }
  }

}


export default TabController;

// 闭包、父组件
// 数据共享、公共逻辑
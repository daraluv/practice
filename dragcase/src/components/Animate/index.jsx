import React from 'react';
import Tween from './Tween.js';
import './style.css';

class Animate extends React.Component {
  constructor(props) {
    super(props);
    this.from = props.from || 200;
    this.to = props.to || 150;
    this.duration = props.duration || 2000;
    this.type = props.type;
    this.nowTimes = 0;//当前次数值
    this.moveNum = parseInt(this.duration/16.66); //实际次数

    this.state = {
      [this.type]:this.from
    };
  }

  move = (type,subType) => {
    this.timerId = requestAnimationFrame(this.move.bind(this, type, subType));

    if(this.nowTimes < this.moveNum){
      this.nowTimes ++;     
    }else{
      cancelAnimationFrame(this.timerId);  
    }
   
    this.setState({
      [this.type ]: Tween[type][subType](this.nowTimes, this.from, this.to, this.moveNum),
    });    
  }

  clickHandler = (type,subType) => {
    cancelAnimationFrame(this.timerId);
    this.move(type,subType);
  }

  render() {
    const styles = {
     [this.type]:this.state[this.type]
    }

    return (
     <div>
        <div className="btn-group">
          <button onClick={() => this.clickHandler('Elastic','easeIn')}>Elastic/easeIn</button>
        </div>       
        <div className="box" style={styles}></div>
      </div>
    )
  }
}

export default Animate;
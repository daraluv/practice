import React from 'react';
import { animate } from './animate';
import './style.css';

class Animate extends React.Component {

  clickHandler = () => {
    animate(this.refs.box, 'elasticInOut', {
      to: 200,
    });
  }

  render() {
    return (
     <div>
        <div className="btn-group">
          <button onClick={this.clickHandler}>Elastic/easeIn</button>
        </div>       
        <div className="box" ref="box"></div>
      </div>
    )
  }
}

export default Animate;
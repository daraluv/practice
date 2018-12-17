import { animationFrame, cancelFrame, getStyle } from '../Animate/css3support';
import { animate } from '../Animate/animate';
import { dragDirection } from './dragDirection.js'

const defaultConfig = {
  speed: 2000,
  direction: 'X',
  autoplay: true,
  effect: 'elasticInOut',
  index:0
}

class Setslider {
  constructor(ele,child,config = {}){
    this._config = {...defaultConfig,...config};
    this.ele = ele;
    this.child = child;
    if (!ele || typeof ele !== 'object') {
      return;
    }
    this.length = this.child.childNodes.length;
    this.width = getStyle( this.ele,'width');
    this.height = getStyle( this.ele,'height');

    if(this._config.direction == 'X') {
      this.dir = parseInt(this.width);
    }else{
      this.dir = parseInt(this.height);
    }
    this.timer = 0;
 
    if(this._config.autoplay){
      this.timer = setInterval(this.move,this._config.speed);    
    }
  }

 setIndex = () => {
    if(this._config.index >= 0 && this._config.index < this.length-1){
      animate(this.child, this._config.effect, {
        to: - this.dir,
        direction: this._config.direction
      }); 
    }else if(this._config.index === this.length){
      this._config.index = 0;
    }else if(this._config.index < 0){
      this._config.index = this.length - 1;
    }
    console.log(this._config.index)
  }

  move = () => {
    this._config.index++;
    this.setIndex();
  }

  prev = () => {
    clearInterval(this.timer);
    this._config.index--;
    this.setIndex();
  }

  next = () => {
    clearInterval(this.timer);
    this._config.index ++;
    this.setIndex();
  }

  touchHandle = () => {
    let that = this;
    dragDirection(this.ele,
      function (direction) {
        if(direction =='left' || direction =='down'){
          that.next();
        }

        if(direction =='right'|| direction =='top'){
           that.prev();
        }                  
      }
        
    )
  }

}

export default Setslider
import { animationFrame, cancelFrame, getStyle } from '../Animate/css3support';
import {animate} from '../Animate/animate';

const defaultConfig = {
  speed: 2000,
  direction: 'X',
  autoplay: true,
  loop: true,
  effect: 'elasticInOut'
}

let index = 0;
let dir,timer;

export function slider(ele,child,config = {}){
  const _config = {
    ...defaultConfig,
    ...config
  }

  if (!ele || typeof ele !== 'object') {
    return;
  }

  let _width = getStyle(child, 'width');
  let _height = getStyle(child, 'height');
  let length = ele.childNodes.length;

 
  if(_config.direction == 'X') {
    dir = parseInt(_width);
  }else{
    dir = parseInt(_height);
  }

  function move(){
    if(index < length-1){
      index++;  
      animate(ele, _config.effect, {
        to: - dir,
        direction: _config.direction
      }); 
    }else{
      if(!_config.loop){
        clearInterval(timer)
      }else{
        index = 0;
        dir *= -1
      }
    }
  }

  if(_config.autoplay){
    timer = setInterval(move,_config.speed);
  }
}

export function prev(ele,child,config = {}){
  index ++;
  clearInterval(timer);
  animate(ele, _config.effect, {
    to: - dir,
  }); 

}

export function next(){
  index ++;
}



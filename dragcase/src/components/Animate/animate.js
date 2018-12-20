import Tween from './Tween';
import { animationFrame, cancelFrame, getStyle } from './css3support';

/**
 * 1. 高频率变动虚拟DOM并非最好的方式
 * 2. 让封装的方法更具有可用性
 * 基于上面两个思路，决定通过传入真实DOM的方式实现一个运动方法
 */

const defaultConfig = {
  from: 0,
  to: 200,
  duration: 600,
  direction: 'X'
}

/**
 * 运动方式名称映射
 */
const animateType = {
  linear: Tween.Linear,
  easeIn: Tween.Quad.easeIn,
  easeOut: Tween.Quad.easeOut,
  easeInOut: Tween.Quad.easeInOut,
  cubicIn: Tween.Cubic.easeIn,
  cubicOut: Tween.Cubic.easeOut,
  cubicInOut: Tween.Cubic.easeInOut,
  quartIn: Tween.Quart.easeIn,
  quartOut: Tween.Quart.easeOut,
  quartInOut: Tween.Quart.easeInOut,
  quintIn: Tween.Quint.easeIn,
  quintOut: Tween.Quint.easeOut,
  quintInOut: Tween.Quint.easeInOut,
  sineIn: Tween.Sine.easeIn,
  sineOut: Tween.Sine.easeOut,
  sineInOut: Tween.Sine.easeInOut,
  expoIn: Tween.Expo.easeIn,
  expoOut: Tween.Expo.easeOut,
  expoInOut: Tween.Expo.easeInOut,
  circIn: Tween.Circ.easeIn,
  circOut: Tween.Circ.easeOut,
  circInOut: Tween.Circ.easeInOut,
  elasticIn: Tween.Elastic.easeIn,
  elasticOut: Tween.Elastic.easeOut,
  elasticInOut: Tween.Elastic.easeInOut,
  backIn: Tween.Back.easeIn,
  backOut: Tween.Back.easeOut,
  backInOut: Tween.Back.easeInOut,
  bounceIn: Tween.Bounce.easeIn,
  bounceOut: Tween.Bounce.easeOut,
  bounceInOut: Tween.Bounce.easeInOut
}

function noop() {}

export function animate(ele, ease = 'easeIn', config = {}, callback = noop) {
  const _config = {
    ...defaultConfig,
    ...config
  }

  if (!ele || typeof ele !== 'object') {
    console.error('请传入正确的元素对象');
    return;
  }

  let s = getStyle(ele, 'transform');

  if (!_config.from) {
    if (s === 'none') {
      _config.from = 0
    } else {
      const temp = s.match(/-?\d+/g);
      const pos = {
        X: parseInt(temp[4].trim()),
        Y: parseInt(temp[5].trim())
      }
      _config.from = pos[_config.direction];
    }
  }
 
  let currentPos = _config.from;
  let timeCount = 0;
  let timer = null;
  const times = parseInt(_config.duration / 16.67);

  console.log(_config.from, _config.to);

  function step() {
    currentPos = animateType[ease](timeCount, _config.from, _config.to, times);
    ele.style.transform = `translate${_config.direction}(${currentPos}px)`;

    if (timeCount < times) {
      timeCount ++;
      timer = animationFrame(step);
      return;
    }

    /**
     * 执行完毕的回调
     */
    callback();
    cancelFrame(timer);
  }

  step();
}
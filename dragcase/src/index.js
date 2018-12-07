import Drag from './libs/Drag'
import './index.css'

const btn = document.querySelector('#btn');
const container = document.querySelector('#container');

btn.onclick = () => {
  const ele = document.createElement('div');
  ele.setAttribute('class', 'drag');
  container.appendChild(ele);
  new Drag(ele, container);
}


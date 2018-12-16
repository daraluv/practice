import React from 'react';
import { render } from 'react-dom';
import Slider from './components/Slider';

// const ele1 = (
//   <div class ='container'>
//   <Drag width={100} height={200} className="dragtest" backgroundColor="orange" />
// )

const ele2 = (
  <Slider></Slider> 
)

render(ele2, document.querySelector('#root'));
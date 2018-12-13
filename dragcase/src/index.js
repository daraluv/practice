import React from 'react';
import { render } from 'react-dom';
import Animate from './components/Animate';

// const ele1 = (
//   <div class ='container'>
//   <Drag width={100} height={200} className="dragtest" backgroundColor="orange" />
// )

const ele2 = (
  <Animate width={100} height={100} type={'top'} className="test"></Animate> 
)

render(ele2, document.querySelector('#root'));
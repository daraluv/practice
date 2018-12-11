import React from 'react';
import { render } from 'react-dom';
import MoveDirection from './components/MoveDirection';

// const ele1 = (
//   <div class ='container'>
//   <Drag width={100} height={200} className="dragtest" backgroundColor="orange" />
// )

const ele2 = (
  <MoveDirection width={100} height={100} className="test"></MoveDirection> 
)

render(ele2, document.querySelector('#root'));
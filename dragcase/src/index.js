import React from 'react';
import { render } from 'react-dom';
import Drag from './components/Drag';

// const ele1 = (
//   <div class ='container'>
//   <Drag width={100} height={200} className="dragtest" backgroundColor="orange" />
// )

const ele2 = (
  <Drag width={200} height={200} className="test"></Drag>
)

render(ele2, document.querySelector('#root'));
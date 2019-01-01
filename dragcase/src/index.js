import React from 'react';
import { render } from 'react-dom';
import TabDemo from './components/TabDemo';

// const ele1 = (
//   <div class ='container'>
//   <Drag width={100} height={200} className="dragtest" backgroundColor="orange" />
// )

const ele2 = (
  <TabDemo /> 
)

render(ele2, document.querySelector('#root'));
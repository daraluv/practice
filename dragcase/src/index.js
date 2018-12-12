import React from 'react';
import { render } from 'react-dom';
import ElasticMove from './components/ElasticMove';

// const ele1 = (
//   <div class ='container'>
//   <Drag width={100} height={200} className="dragtest" backgroundColor="orange" />
// )

const ele2 = (
  <ElasticMove width={50} height={50} className="test" targetLocation={500}></ElasticMove> 
)

render(ele2, document.querySelector('#root'));
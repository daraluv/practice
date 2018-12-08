import React from 'react';
import { render } from 'react-dom';
import PropsDemo from './components/PropsDemo';

// const ele1 = (
//   <Drag width={100} height={200} className="dragtest" backgroundColor="orange" />
// )

// const ele2 = (
//   <Drag>
//     <h1>drag</h1>
//     <div className="content">this is content.</div>
//   </Drag>
// )

render(<PropsDemo><p>hello props children</p></PropsDemo>, document.querySelector('#root'));
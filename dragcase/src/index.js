import React from 'react';
import { render } from 'react-dom';
import PropsDemo from './components/PropsDemo';

render(<PropsDemo a={10} b="hello" c="good" d={{ name: 'alex', age: 20 }} />, document.querySelector('#root'));
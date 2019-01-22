import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Drag from './components/Drag';

ReactDOM.render(
  <Drag />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
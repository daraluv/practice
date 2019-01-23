import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Drag from './components/Drag';
import './index.css';

ReactDOM.render(
  <Drag />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

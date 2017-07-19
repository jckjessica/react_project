import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import buildTable from './build';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ContextProvider from './context/Context';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

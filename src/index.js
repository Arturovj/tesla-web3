import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { UserContextProvider } from './contexts/userContext';

ReactDOM.render(
  <UserContextProvider>
  <Router>
  <React.StrictMode>
    {/* <Provider store={store}> */}
    
      <App />
    {/* </Provider> */}
    
  </React.StrictMode>
  </Router>
  </UserContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

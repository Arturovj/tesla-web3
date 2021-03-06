import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { UserContextProvider } from './contexts/userContext';
import { CarritoContextProvider } from './contexts/carritoContext';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

ReactDOM.render(
  <CarritoContextProvider>
  <UserContextProvider>
  <Router>
    <ScrollToTop/>
  <React.StrictMode>
    {/* <Provider store={store}> */}
    
      <App />
    {/* </Provider> */}
    
  </React.StrictMode>
  </Router>
  </UserContextProvider>
  </CarritoContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import BackendClient from './backend/BackendClient';
import TestClient from './backend/TestClient';
import {BackendContext} from './hooks/useBackend';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './router';

const rootElement = document.getElementById("root");
if(rootElement === null){
   throw "root is null!"
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BackendContext.Provider value={{client: new BackendClient()}}>
      <AppRoutes />
    </BackendContext.Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

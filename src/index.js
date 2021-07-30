import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CameraProvider from "./components/Camera/CameraContext";

ReactDOM.render(
  <React.StrictMode>
  <CameraProvider>
    <App />
  </CameraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

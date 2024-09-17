import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Menyu from './components/Menyu';
import "./App.css"
// import Account1 from './pages/Account1';
import MainLayout from './layout/MainLeyout';
// import App from './App';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Menyu/> */}
    {/* <App/> */}
    {/* <Account1/> */}
    <MainLayout/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

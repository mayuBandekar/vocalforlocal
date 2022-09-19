import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';
import axios from "axios";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// axios.defaults.baseURL = "https://fast-thicket-19153.herokuapp.com";
// axios.defaults.headers.post['Content-Type'] ='application/json';
//   axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = "http://localhost:8000";


root.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PersistGate>
</Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './AppRoutes';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
//import { Provider } from 'react-redux';
//import { store } from './redux/slices/store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  </*Provider store={store}*/>
    <RouterProvider router={AppRoutes}/>
  </>/*/Provider*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

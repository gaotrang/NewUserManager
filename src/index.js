import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './pages/Dashboard';
import Welcome from './pages/Welcome';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PulicRoute';
import Students from './pages/Students';


const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute component={<Welcome />} />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute component={<Dashboard />} />,
  },
  {
    path: "/students",
    element: <PrivateRoute component={<Students />} />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Welcome from './pages/Welcome.jsx';
import Dummy from './pages/Dummy.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element: <Welcome />,
//       },
//       {
//         path: 'login',
//         element: <Login />,
//       },
//       {
//         path: 'signup',
//         element: <Signup />,
//       },
//     ],
//   },
//   {
//     path: '/after',
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element: <Welcome />,
//       },
//       {
//         path: 'login',
//         element: <Login />,
//       },
//       {
//         path: 'signup',
//         element: <Signup />,
//       },
//       {
//         path: 'dummy',
//         element: <Dummy />,
//       },
//     ],
//   },

//   {},
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Welcome />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="dummy" element={<Dummy />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
);

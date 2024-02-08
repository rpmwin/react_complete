import { useState } from 'react';

import './App.css';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <UserContextProvider>
      <div>hey this is APP . JSX page</div>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;

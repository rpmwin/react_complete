import React, { useContext, createContext } from 'react';

const user = createContext({
  username: '',
  password: '',
});

function userContext() {
  return useContext(user);
}

export const userProvider = user.Provider;

export default userContext;

const rpm = createContext({
  name:'',
  dob:"",
  phone:"",
  
})


import React, { useEffect } from 'react';
import axios from 'axios';
// import users from './lib/users.js';
import jwt_encode from 'jwt-encode';
import cookie from 'react-cookies';

export const AuthContext = React.createContext();

function AuthProvider({ children }) {

  const [user, setUser] = React.useState({});
  const [token, setToken] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    const token = cookie.load('auth');
    validateToken(token);
  }, []);

  const validateToken = (token) => {
    try {
      const user = jwt_encode(token);
      setUser(user);
      setToken(token);
      setIsLoggedIn(true);
    } catch (e) {
      setUser({});
      setToken('');
      setIsLoggedIn(false);
    }
  }

  const login = async (username, password) => {
    const config = {
      method: 'post',
      baseURL: 'https://api-401js.herokuapp.com',
      url: '/signin',
      method: 'post',
      auth: {
        username: username,
        password: password
      }
    }
    const response = await axios(config);
    console.log('RESPONSE FROM AXIOS -----------', response.data);
    const { token } = response.data;
    validateToken(token);
  }

  const logout = () => {
    setUser({});
    setToken('');
    setIsLoggedIn(false);
  }

  const can = (capability) => {
    return user.capabilities && user.capabilities.includes(capability);
  }

  const state = {
    user,
    token,
    isLoggedIn,
    login,
    logout,
    can
  }



  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthProvider;









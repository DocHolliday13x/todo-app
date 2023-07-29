import axios from 'axios';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';
import React, { useState, useEffect } from 'react'; 

export const AuthContext = React.createContext();


function AuthProvider({ children }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  useEffect (() => {
  let cookieToken = cookie.load('auth');
  _validateToken(cookieToken);
  }, []);

  const _validateToken = token => {
    try {
      // if token is valid, then we have a user assigned to the validUser variable
      let validUser = jwt_decode(token);
      console.log('Valid User', validUser);
      // if valid token we set login to true and set user to the validUser
      if (validUser) {
        // save cookie
        cookie.save('auth', token);
        setUser(validUser);
        setIsLoggedIn(true);
        // console.log('User is logged in', isLoggedIn);
      }
    }
    catch (error) {
      setError(error);
      console.log('User Token Validation Error', error);
    }

  };

  const login = async (username, password) => {
    let config = {
      baseURL: 'https://api-js401.herokuapp.com',
      url: '/signin',
      method: 'post',
      auth: { username, password }
    }

    let response = await axios(config);
    console.log('RESPONSE FROM AXIOS--------------', response.data);
    let token = response.data.token;

    if (token) {
      try {
        _validateToken(token);
      } catch (error) {
        setError(error);
        console.log('Login Error', error);
      }
    }
  };

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
  };


  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  };

  const values = {
    isLoggedIn,
    user,
    error,
    login,
    logout,
    can,
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthProvider;









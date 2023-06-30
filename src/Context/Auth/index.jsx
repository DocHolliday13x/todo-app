import React from 'react';
import users from './lib/users.js';
import jwt_encode from 'jwt-encode';

export const AuthContext = React.createContext();

function AuthProvider({ children }) {

  const [user, setUser] = React.useState({});
  const [token, setToken] = React.useState('');

  const login = (username, password) => {
    const user = users.find(user => user.username === username);
    if (user && user.password === password) {
      const token = jwt_encode({ username: user.username });
      setToken(token);
      setUser(user);
    }
  }

  const logout = () => {
    setToken('');
    setUser({});
  }

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  }

  const state = {
    user,
    token,
    login,
    logout,
    can,
  }

  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthProvider;









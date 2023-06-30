import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { When } from 'react-if'; // npm i react-if

function Auth ({ children, capability }) {
  const context = useContext(AuthContext);

  let okToRender = false;

  try {
    okToRender =
      context.loggedIn &&
      (capability ? context.user.capabilities.includes(capability) : true);
  } catch (e) {
    console.warn('Not Authorized!');
  }

  return <When condition={okToRender}>{children}</When>;
}


export default Auth;





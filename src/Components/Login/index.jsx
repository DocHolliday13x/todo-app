import React, { useState, useContext } from 'react';
import { When } from 'react-if';
import { AuthContext } from '../../Context/Auth';
import { Button, Group, TextInput, createStyles } from '@mantine/core';


const styles = createStyles((theme) => ({
  loginButton: {
    backgroundColor: theme.colors.gray[7],
   
  },
  logoutButton: {
    backgroundColor: theme.colors.red[7],
   
  }
}));


const Login = () => {

  const { classes } = styles(); // this needs to be in the function
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogout = () => {
    logout();
    setUsername('');
    setPassword('');
  }


  return (
    <>
      
        <When condition={isLoggedIn}>
          <Button className={classes.logoutButton} onClick={handleLogout}>Logout</Button>
        </When>
     
      <When condition={!isLoggedIn}>
        <Group >
          <TextInput
            placeholder='Username'
            name='username'
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextInput
            placeholder='password'
            name='password'
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button onClick={() => login(username, password)} className={classes.loginButton}>Log In</Button>
        </Group>
      </When>

    </>
  )
};


export default Login;




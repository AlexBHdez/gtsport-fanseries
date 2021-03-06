import React, { useState } from 'react';
import { withAuth } from '../../context/AuthContext';

const Signup = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleChange = ({ target }) => {
    const { name, value } = target;
    return name === 'username' ? setUsername(value) : setPassword(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    return props.handleSignup({ username, password });
  }
  
  return (
    <>
      <h2>Signup</h2>
      <form onSubmit={ handleSubmit }>
        <label>Username:</label>
        <input type='text' name='username' value={ username } onChange={ handleChange } />
        <label>Password:</label>
        <input type='password' name='password' value={ password } onChange={ handleChange } />
        <input type='submit' value='Submit' />
      </form>
    </>
  );
}

export default withAuth(Signup);

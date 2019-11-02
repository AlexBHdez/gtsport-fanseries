import React from 'react';
import { withAuth } from '../../context/AuthContext';

const Header = props => {
  
  const handleClick = () => props.handleLogout();

  return (
    <header>
      { props.isLoggedin ? <button onClick={ handleClick }>Logout</button> : 'HEADER' }
    </header>
  );
}

export default withAuth(Header);

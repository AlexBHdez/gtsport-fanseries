import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../context/AuthContext';

function PublicRoute({ component: Comp, isLoggedin, ...rest }) {
  return (
    <Route { ...rest } render={ props => (
      !isLoggedin ? <Comp { ...props } /> : <Redirect to={{ pathname: '/dashboard' }} /> 
    )} />
  )
};

export default withAuth(PublicRoute);
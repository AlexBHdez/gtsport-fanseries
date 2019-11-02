import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AuthProvider from './context/AuthContext'
import { GlobalStyle, lightTheme } from './styles';
import styled from 'styled-components';

import { PublicRoute, PrivateRoute } from './hoc';

import Layout from './layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

const Container = styled.div`
  background-color: ${ ({ theme }) => theme.colors.light };
  height: 100vh;
`

class FanSeriesApp extends Component {
  render() {
    return (
      <AuthProvider>
        <ThemeProvider theme={ lightTheme }>
          <Container>
            <Layout>
              <Router>
                <Switch>
                  <PublicRoute exact path='/' component={ Home } />
                  <PublicRoute exact path='/login' component={ Login } />
                  <PublicRoute exact path='/signup' component={ Signup } />
                  <PrivateRoute exact path='/dashboard' component={ Dashboard } />
                </Switch>
              </Router>
            </Layout>
          </Container>
          <GlobalStyle />
        </ThemeProvider>
      </AuthProvider>
    )
  };
};

export default FanSeriesApp;

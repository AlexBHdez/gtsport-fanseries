import React, { Component, createContext } from 'react';
import authService from '../services/authService';

const AuthContext = createContext();

const Provider = AuthContext.Provider;
const AuthConsumer = AuthContext.Consumer;

export const withAuth = Comp => {
  return class WithAuth extends Component {
    render() {
      return (
        <AuthConsumer>
          {
            ({ isLoading, isLoggedin, user, handleLogin, handleLogout, handleSignup }) => (
              <Comp { ...this.props } isLoading={ isLoading } isLoggedin={ isLoggedin } user={ user } handleLogin={ handleLogin } handleLogout={ handleLogout } handleSignup={ handleSignup } />
            )
          }
        </AuthConsumer>
      )
    }
  }
}

export default class AuthProvider extends Component {
  state = {
    isLoggedin: false,
    user: undefined,
    isLoading: true
  }

  componentDidMount() {
    authService.me()
    .then(user => {
      this.setState({
        isLoggedin: true,
        user,
        isLoading: false
      })
    })
    .catch(() => {
      this.setState({
        isLoading: false
      })
    })
  }

  handleSignup = user => {
    authService.signup(user)
    .then(newUser => {
      this.setState({
        isLoggedin: true,
        user: newUser,
        isLoading: false
      })
    })
    .catch(() => {
      this.setState({
        isLoading: false
      })
    })
  }

  handleLogin = user => {
    authService.login(user)
    .then(loggedUser => {
      this.setState({
        isLoggedin: true,
        user: loggedUser,
        isLoading: false
      })
    })
    .catch(() => {
      this.setState({
        isLoading: false
      })
    })
  }

  handleLogout = () => {
    authService.logout()
    .then(() => {
      this.setState({
        isLoggedin: false,
        user: undefined,
        isLoading: false
      })
    })
    .catch(() => {
      this.setState({
        isLoggedin: false,
        user: undefined,
        isLoading: false
      })
    })
  }

  render() {
    const { isLoading, isLoggedin, user } = this.state;
    const { children } = this.props;

    return isLoading ? <div>Loading...</div> : (
      <Provider value={{ isLoading, isLoggedin, user, handleLogin: this.handleLogin, handleLogout: this.handleLogout, handleSignup: this.handleSignup }}>
        { children }
      </Provider>
    )
  }
}

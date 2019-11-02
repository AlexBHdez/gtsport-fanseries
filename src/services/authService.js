import axios from 'axios'

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API,
      withCredentials: true
    })
  }

  signup(user) {
    return this.auth.post('/auth/signup', user).then(({ data }) => data);
  }

  async login(user) {
    const response = this.auth.post('/auth/login', user);
    return response;
  }

  async logout() {
    const response = this.auth.get('/auth/logout', {});
    return response;
  }

  me(user) {
    return this.auth.get('/auth/me').then(({ data }) => data);
  }
}

const authService = new AuthService();
export default authService;

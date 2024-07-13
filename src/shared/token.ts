import { jwtDecode } from 'jwt-decode';

class TokenController {
  storageKey: string;

  constructor(storageKey: string) {
    this.storageKey = storageKey;
  }

  clearToken() {
    localStorage.removeItem(this.storageKey);
  }

  saveToken(token: string) {
    localStorage.setItem(this.storageKey, token);
  }

  getToken() {
    const token = localStorage.getItem(this.storageKey);
    if (!token) return null;
    if (this.checkToken(token)) return token;
  }

  private checkToken(token: string) {
    const decode = jwtDecode(token);
    const cureDate = Math.floor(new Date().getTime() / 1000);
    return decode.exp! > cureDate;
  }
}

export const tokenController = new TokenController('token');

import { API_URL } from "./config";

class AuthService {
  AUTH_DETAILS = "AUTH_DETAILS";
  authDetails;

  constructor() {
    this.authDetails = JSON.parse(localStorage.getItem(this.AUTH_DETAILS));
  }

  async login(email, password) {
    try {
      const response = await fetch(`${API_URL}/users/sign_in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: { password, email },
        }),
      });
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
      this.saveAuthDetails(response.headers);
      return true;
    } catch (error) {
      return false;
    }
  }

  saveAuthDetails(headers) {
    const token = headers.get("Access-Token");
    const client = headers.get("Client");
    const uid = headers.get("Uid");
    const expiry = headers.get("Expiry");
    this.authDetails = { token, client, uid, expiry };
    localStorage.setItem(this.AUTH_DETAILS, JSON.stringify(this.authDetails));
  }
  getAuthHeader() {
    return {
      "access-token": this.authDetails?.token,
      client: this.authDetails.client,
      expiry: this.authDetails.expiry,
      uid: this.authDetails.uid,
    };
  }

  logOut() {
    this.authDetails = null;
    localStorage.removeItem(this.AUTH_DETAILS);
  }

  isAuthenticated() {
    return this.authDetails !== null;
  }
}

const service = new AuthService();
export default service;

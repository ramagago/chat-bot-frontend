import { API_URL } from "./config";

class AuthService {
  TOKEN_KEY = "TOKEN_KEY";
  authDetails;

  //   constructor() {
  //     this.token = localStorage.getItem(this.TOKEN_KEY);
  //   }

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
    const authDetails = { token, client, uid, expiry };
    this.authDetails = authDetails;
    localStorage.setItem(this.AUTH_DETAILS, JSON.stringify(authDetails));
  }
  getAuthHeader() {
    return {
      "access-token": this.authDetails.token,
      client: this.authDetails.client,
      expiry: this.authDetails.expiry,
      uid: this.authDetails.uid,
    };
  }
}

const service = new AuthService();
export default service;

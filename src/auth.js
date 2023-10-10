class AuthService {
  TOKEN_KEY = "TOKEN_KEY";
  token;

  //   constructor() {
  //     this.token = localStorage.getItem(this.TOKEN_KEY);
  //   }

  async login(email, password) {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/users/sign_in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: { password, email },
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
      this.saveToken(response.headers.get("Access-Token"));
      return true;
    } catch (error) {
      return false;
    }
  }

  saveToken(token) {
    this.token = token;
    localStorage.setItem(this.TOKEN_KEY, token);
  }
}

const service = new AuthService();
export default service;

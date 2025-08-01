class BaseClass {
  constructor() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.token = user?.token;
    this.userId = user?.userID;
    this.phone = user?.phone;
    this.user = user;

    this.authHeaders = {
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };
  }
  get authJsonHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.token}`,
    };
  }

  isTokenExpired() {
    if (!this.token) return true;

    try {
      const payload = JSON.parse(atob(this.token.split(".")[1]));
      const expiry = payload.exp;
      const now = Math.floor(Date.now() / 1000);

      return now >= expiry;
    } catch (e) {
      throw new Error("Invalid token format");
    }
  }
  isAuthenticated() {
    // return !!this.token && !this.user && !this.isTokenExpired();
    return !!this.token && !!this.user && !this.isTokenExpired();
  }
}
export default BaseClass;

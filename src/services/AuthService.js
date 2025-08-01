import BaseClass from "./BaseClass";
import { fetchAPI } from "../utils/fetchApiRequest";

export class AuthService extends BaseClass {
  constructor() {
    super();
  }
  async logIn({ phone, password }) {
    try {
      return await fetchAPI("user/login", "POST", { phone, password });
    } catch (error) {
      throw new Error(error?.message || "Something went wrong");
    }
  }

  async register({ phone, password }) {
    try {
      return await fetchAPI("user/create-account", "POST", { phone, password });
    } catch (error) {
      throw new Error(error?.message || "Something went wrong");
    }
  }

  async forgotPassword({ phone, password }) {
    try {
      return await fetchAPI("user/forgot-password", "POST", {
        phone,
        password,
      });
    } catch (error) {
      throw new Error(error?.message || "Something went wrong");
    }
  }

  async resetPassword({ phone, otp, newPassword }) {
    try {
      return await fetchAPI("user/reset-password", "POST", {
        phone,
        otp,
        newPassword,
      });
    } catch (error) {
      throw new Error(error?.message || "Something went wrong");
    }
  }

  async deleteAccount({ duration }) {
    try {
      return await fetchAPI(
        `user/delete-account?duration=${duration}`,
        "DELETE",
        null
      );
    } catch (error) {
      throw new Error(error?.message || "Something went wrong");
    }
  }

  async logOut() {
    try {
      if (!this.token) {
        throw new Error("Something went wrong");
      }

      return await fetchAPI("user/logOut", "POST", null, this.token);
    } catch (error) {
      throw new Error(error?.message || "Something went wrong");
    }
  }
}

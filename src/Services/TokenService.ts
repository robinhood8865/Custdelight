import { USER_ACCESS_TOKEN } from "../enum";

class TokenService {
  getAccessToken() {
    const accessToken = localStorage.getItem(USER_ACCESS_TOKEN);
    try {
      if (accessToken) {
        return accessToken;
      }
      return undefined;
    } catch (err) {
      return undefined;
    }
  }
}

export default Object.freeze(new TokenService());

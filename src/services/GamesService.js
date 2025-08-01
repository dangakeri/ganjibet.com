import { fetchAPI } from "../utils/fetchApiRequest";
import BaseClass from "./BaseClass";

class GameService extends BaseClass {
  constructor() {
    super();
  }

  async getAllGames() {
    try {
      const res = await fetchAPI("games/getAllGames", "GET");
      return res?.data;
    } catch (error) {
      throw new Error(error?.message || "Unable to fetch all games");
    }
  }

  async generateGameSession({ game, userId }) {
    try {
      return await fetchAPI("session/createGameSession", "POST", {
        userId,
        game,
      });
    } catch (error) {
      throw new Error(error?.message || "Unable to launch game session");
    }
  }

  async getAllImoonGames() {
    try {
      const res = await fetchAPI("games/getImoonGames", "GET");
      return res?.data;
    } catch (error) {
      throw new Error(error?.message || "Unable to fetch Imoon games");
    }
  }

  async getVmPlayGames() {
    try {
      const res = await fetchAPI("vimplay/getVimplayGames", "GET");
      return res?.data;
    } catch (error) {
      throw new Error(error?.message || "Unable to fetch Vimplay games");
    }
  }

  async launchSportGame() {
    try {
      const userID = this.userId;

      if (!userID) throw new Error("User ID is missing");

      const res = await fetchAPI(
        "sports/launch",
        "POST",
        { userId: userID },
        this.token
      );
      return res?.data;
    } catch (error) {
      throw new Error(error?.message || "Unable to launch sports game");
    }
  }

  async getElbetGames() {
    try {
      const res = await fetchAPI(
        "elbet/GetElbetGames",
        "GET",
        null,
        this.token
      );
      return res;
    } catch (error) {
      throw new Error(error?.message || "Unable to fetch Elbet games");
    }
  }

  async launchElbet({ game, gameID }) {
    try {
      if (!this.userId) throw new Error("User not authenticated");

      const res = await fetchAPI(
        "elbet/launch",
        "POST",
        { game: game, gameID: gameID },
        this.token
      );

      return res;
    } catch (error) {
      throw new Error(error?.message || "Unable to launch Elbet game");
    }
  }

  async launchImoonGame({ gameID }) {
    try {
      const res = await fetchAPI(
        "imoon/launchGame",
        "POST",
        { gameId: gameID, userID: this.userId },
        this.token
      );

      return res;
    } catch (error) {
      throw new Error(error?.message || "Failed to launch Imoon game");
    }
  }

  async launchVimplayGame({ gameID }) {
    const payload = { gameId: +gameID, userId: this.userId };
    try {
      const res = await fetchAPI(
        "vimplay/launchVimplayGame",
        "POST",
        payload,
        this.token
      );

      return res;
    } catch (error) {
      throw new Error(error?.message || "Failed to launch Vimplay game");
    }
  }
}

export default GameService;

import { UI } from "./UI.js";

export class GameHome {
  constructor(ui) {
    this.ui = ui;
    this.apiKey = "5ad20e2ad9msh44952e65f77faecp1d0929jsn6494a97af20e";
    this.apiHost = "free-to-play-games-database.p.rapidapi.com";
  }

  async getGames(gameCategory) {
    this.ui.showLoader();
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": this.apiKey,
        "x-rapidapi-host": this.apiHost,
      },
    };
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${gameCategory}`;
    const gamesApi = await fetch(url, options);
    const data = await gamesApi.json();
    this.ui.displayGames(data, this.showDetails.bind(this));
    this.ui.hideLoader();
  }

  showDetails(gameId) {
    const event = new CustomEvent("showGameDetails", { detail: { gameId } });
    document.dispatchEvent(event);
  }
}

import { UI } from "./UI.js";

export class GameDetails {
  constructor(ui) {
    this.ui = ui;
    this.apiKey = "5ad20e2ad9msh44952e65f77faecp1d0929jsn6494a97af20e";
    this.apiHost = "free-to-play-games-database.p.rapidapi.com";
    document.addEventListener("showGameDetails", async (e) => {
      const gameId = e.detail.gameId;
      await this.showDetails(gameId);
    });
  }

  async showDetails(gameId) {
    this.ui.showLoader();
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": this.apiKey,
        "x-rapidapi-host": this.apiHost,
      },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    this.ui.displayDetails(result);
    this.ui.hideLoader();
  }

  hideDetails() {
    this.ui.hideDetails();
  }
}

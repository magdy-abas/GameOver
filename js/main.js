import { UI } from "./UI.js";
import { GameHome } from "./GameHome.js";
import { GameDetails } from "./GameDetails.js";

// Initialize UI
const ui = new UI();
const gameHome = new GameHome(ui);
const gameDetails = new GameDetails(ui);

//when start
gameHome.getGames("mmorpg");

//Events
const navLinks = document.querySelectorAll(".nav-item a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-item .active").classList.remove("active");
    link.classList.add("active");
    let Category = link.getAttribute("data-category");
    gameHome.getGames(Category);
  });
});

document.querySelector("#btnClose").addEventListener("click", () => {
  gameDetails.hideDetails();
});

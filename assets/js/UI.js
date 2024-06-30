export class UI {
  constructor() {
    this.loader = document.querySelector(".loading");
    this.detailsPage = document.querySelector(".details");
    this.gamesContainer = document.querySelector(".games-cards .row");
    this.detailsContent = document.querySelector("#detailsContent");
  }

  showLoader() {
    this.loader.classList.remove("d-none");
  }

  hideLoader() {
    this.loader.classList.add("d-none");
  }

  displayGames(gamesData, showDetails) {
    let container = "";
    gamesData.forEach((game) => {
      container += `
        <div class="col col-md-6 col-lg-3 gy-4">
          <div class="card h-100 bg-transparent" role="button" onclick="showDetails(${game.id})">
            <div class="card-body">
              <figure class="position-relative">
                <img class="card-img-top object-fit-cover h-100" src="${game.thumbnail}">
              </figure>
              <figcaption>
                <div class="hstack justify-content-between">
                  <h3 class="text-white fs-6">${game.title}</h3>
                  <span class="badge img-price p-2">Free</span>
                </div>
                <p class="card-text fs-6 text-center">${game.short_description}</p>
              </figcaption>
            </div>
            <footer class="card-footer small hstack justify-content-between">
              <span class="badge badge-color">${game.genre}</span>
              <span class="badge badge-color">${game.platform}</span>
            </footer>
          </div>
        </div>
      `;
    });
    this.gamesContainer.innerHTML = container;

    // Add event listeners for showDetails
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const gameId = card.getAttribute("onclick").match(/\d+/)[0];
        showDetails(gameId);
      });
    });
  }

  displayDetails(gameDetails) {
    let container = `
      <div class="col-md-4">
        <img src="${gameDetails.thumbnail}" class="w-100" alt="image details">
      </div>
      <div class="col-md-8 text-white">
        <h3>Title: ${gameDetails.title}</h3>
        <p>Category: <span class="badge text-bg-info">${gameDetails.genre}</span></p>
        <p>Platform: <span class="badge text-bg-info">${gameDetails.platform}</span></p>
        <p>Status: <span class="badge text-bg-info">${gameDetails.status}</span></p>
        <p class="small">${gameDetails.description}</p>
        <a class="btn btn-outline-warning" target="_blank" href="${gameDetails.game_url}">Show Game</a>
      </div>
    `;
    this.detailsContent.innerHTML = container;
    this.detailsPage.classList.remove("d-none");
  }

  hideDetails() {
    this.detailsPage.classList.add("d-none");
    this.detailsContent.innerHTML = "";
  }
}

// Création d'une classe HomeCard
//eslint-disable-next-line no-unused-vars
class HomeCard {
    // Le constructeur prend en paramètre les données de la page d'accueil
    constructor(photographer) {
      this._photographers = photographer;
    }
  
    // Fonction pour creer la carte
    createHomeCard() {
      const photographer_section = document.createElement("article");
      photographer_section.classList.add("card_profile");
      const homeCard = `
              <a href="photographer.html?id=${this._photographers.id}" role="link" aria-label="${this._photographers.name}">
                  <img alt="${this._photographers.name}" aria-hidden="true" class='card_picture' src="./assets/photographers/${this._photographers.portrait}">
                  <h2 class='card_name' aria-label="Nom du photographe" >${this._photographers.name}</h2>
              </a>
              <div class='cards_info' role="region">
                <span  aria-hidden="true" class='cards_country'>${this._photographers.city}, ${this._photographers.country}</span>
                <p class='cards_tagline' aria-label="Phrase d'accroche du photographe">${this._photographers.tagline}</p>
                <span aria-hidden="true" class='cards_price'>${this._photographers.price} € / Jour</span>
              </div>
          `;
      photographer_section.innerHTML = homeCard;
      return photographer_section;
    }
  }
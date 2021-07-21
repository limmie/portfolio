"use strict";

class Destinations {
  constructor() {
    this.cityCards = [
      { name: "Cuba city", image: "./static/images/destinations/city-1.jpg" },
      { name: "Paris", image: "./static/images/destinations/city-2.jpg" },
      { name: "Japan", image: "./static/images/destinations/city-3.jpg" }
    ];

    this.HTML = {
      cards: document.getElementById("destinations-city-cards")
    };
  }

  initCityCards = () => {
    let template = "";

    for (let i = 0; i < this.cityCards.length; i++) {
      template += `<div class="destinations-city-card">
                        <div class="destinations-city-card-image">
                            <img src="${this.cityCards[i].image}" />
                        </div>
                        <h2>${this.cityCards[i].name}</h2>
                    </div>`;
    }

    this.HTML.cards.innerHTML = template;
  };
}

const destinations = new Destinations();

destinations.initCityCards();

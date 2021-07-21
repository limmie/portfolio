"use strict";

class ChooseDestination {
  constructor() {
    this.places = [
      {
        name: "Santorini, Oia Greece",
        price: "2000$",
        reviews: "5k",
        image: "./static/images/choose-destination/place-1.jpg"
      },
      {
        name: "Santorini, Oia Greece",
        price: "2000$",
        reviews: "5k",
        image: "./static/images/choose-destination/place-2.jpg"
      },
      {
        name: "Santorini, Oia Greece",
        price: "2000$",
        reviews: "5k",
        image: "./static/images/choose-destination/place-3.jpg"
      }
    ];

    this.HTML = {
      places: document.getElementById("choose-destination-places"),
      starReviews: document.getElementsByClassName("review-stars")
    };
  }

  renderStarsOnReviews = () => {
    for (let j = 0; j < this.HTML.starReviews.length; j++) {
      let stars = "";

      for (let i = 0; i < 5; i++) {
        stars += `
            <div class="star">
                <img src="./static/icons/star.svg" />
            </div>
        `;
      }

      this.HTML.starReviews[j].innerHTML = stars;
    }
  };

  renderPlaces = () => {
    let template = "";

    for (let i = 0; i < this.places.length; i++) {
      template += `
        <div class="choose-destination-place">
            <div class="choose-destination-place-image">
                <img src="${this.places[i].image}" alt="">
            </div>
            <div class="choose-destination-place-info-panel">
                <div class="choose-destination-place-info">
                        <h1>${this.places[i].name}</h1>
                        <div class="choose-destination-place-info-price-review">
                        <div class="price is-highlighted-text">${this.places[i].price}</div>
                        <div class="review">
                            <div class="review-stars"></div>
                            <span>${this.places[i].reviews} reviews</span>
                        </div>
                    </div>
                </div>
                <div class="choose-destination-place-button default-button">+</div>
            </div>
        </div>
        `;
    }

    this.HTML.places.innerHTML = template;
  };
}

const chooseDestination = new ChooseDestination();

chooseDestination.renderPlaces();
chooseDestination.renderStarsOnReviews();

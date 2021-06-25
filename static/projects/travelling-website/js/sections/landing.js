"use strict";

class Landing {
  constructor() {
    this.slides = [
      {
        index: 0,
        name: "It's time to <br>explore the world",
        image: "./static/images/landing/slides/slide-1.jpg"
      },
      {
        index: 1,
        name: "Dicover cheaper,<br> but efficient",
        image: "./static/images/landing/slides/slide-2.jpg"
      },
      {
        index: 2,
        name: "Let your dreams happen",
        image: "./static/images/landing/slides/slide-3.jpg"
      }
    ];

    this.currentSlide = this.slides[0];

    this.cards = [
      {
        title: "Choose your destinations",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio",
        image: "./static/images/landing/cards/card-1.png"
      },
      {
        title: "Choose your destinations",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ",
        image: "./static/images/landing/cards/card-2.png"
      },
      {
        title: "Choose your destinations",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ",
        image: "./static/images/landing/cards/card-3.png"
      },
      {
        title: "Choose your destinations",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ",
        image: "./static/images/landing/cards/card-4.png"
      }
    ];

    this.HTML = {
      slider: document.getElementById("landing-slider-slides"),
      prevButton: document.getElementById("landing-slider-nav-buttons-prev"),
      nextButton: document.getElementById("landing-slider-nav-buttons-next"),
      slideIndex: document.getElementById("landing-slider-nav-page-number")
        .children[0],
      cards: document.getElementById("landing-cards")
    };

    this.slidesLength = this.slides.length;
  }

  initSlidesAndIndex = () => {
    this.HTML.slider.innerHTML = `<div class="landing-slide"><div class="landing-slide-image"><img src="${this.currentSlide.image}" alt="" /></div><h1 class="landing-slide-title">${this.currentSlide.name}</h1><div class="default-button landing-slide-button"><span>Plan your trip</span></div></div>`;

    this.HTML.slideIndex.innerHTML = `0${this.currentSlide.index + 1}`;
  };

  changeCurrentSlide = index => {
    this.HTML.slider.classList.toggle("is-hide");
    setTimeout(() => {
      this.currentSlide = this.slides[index];
      this.initSlidesAndIndex();
      this.HTML.slider.classList.toggle("is-hide");
    }, 600);
  };

  initCards = () => {
    let template = "";
    for (let i = 0; i < this.cards.length; i++) {
      template += `<div class="landing-card">
                    <div class="landing-card-image">
                      <img src="${this.cards[i].image}" alt="">
                    </div>
                    <div class="landing-card-description">
                      <h2>${this.cards[i].title}</h2>
                      <p>${this.cards[i].description}</p>
                    </div>
                  </div>`;
    }
    this.HTML.cards.innerHTML = template;
  };
}

const landing = new Landing();

landing.initSlidesAndIndex();
landing.initCards();

const HTML = landing.HTML;
HTML.prevButton.addEventListener("click", event => {
  if (landing.currentSlide.index === 0) {
    landing.changeCurrentSlide(landing.slidesLength - 1);
  } else {
    landing.changeCurrentSlide(landing.currentSlide.index - 1);
  }
});

HTML.nextButton.addEventListener("click", event => {
  if (landing.currentSlide.index === landing.slidesLength - 1) {
    landing.changeCurrentSlide(0);
  } else {
    landing.changeCurrentSlide(landing.currentSlide.index + 1);
  }
});

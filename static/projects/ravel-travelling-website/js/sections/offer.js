"use strict";

class Offer {
  constructor() {
    this.accordionItems = [
      {
        title: "Best Travel Guide Always For Your Services",
        text:
          "Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes. Travel has helped us to understand the meaning of life",
        color: "red",
        icon: "red-user"
      },
      {
        title: "Best Travel Guide Always For Your Services",
        text:
          "Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes. Travel has helped us to understand the meaning of life",
        color: "green",
        icon: "green-globe"
      },
      {
        title: "Best Travel Guide Always For Your Services",
        text:
          "Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes. Travel has helped us to understand the meaning of life",
        color: "yellow",
        icon: "yellow-headphones"
      }
    ];

    this.HTML = {
      accordion: document.getElementById("offer-description-accordion"),
      accordionItems: document.querySelectorAll(
        ".offer-description-accordion-item"
      )
    };
  }

  renderAccordionItems = () => {
    let template = "";

    for (let i = 0; i < this.accordionItems.length; i++) {
      template += `
            <div class="offer-description-accordion-item">
                <div class="default-icon offer-description-accordion-item-icon">
                    <img src="./static/icons/${this.accordionItems[i].icon}.svg" />
                </div>

                <div class="offer-description-accordion-item-description">
                  <h2>${this.accordionItems[i].title}</h2>
                  <p>${this.accordionItems[i].text}</p>
                </div>
            </div>
          `;
    }

    this.HTML.accordion.innerHTML = template;
    this.HTML.accordionItems = document.querySelectorAll(
      ".offer-description-accordion-item"
    );
  };

  toggleAccordionItem = async index => {
    const p = this.HTML.accordionItems[index].querySelector("p");

    if (p.style.maxHeight) {
      p.style.maxHeight = null;
    } else {
      p.style.maxHeight = p.scrollHeight + "px";
    }
  };

  initEventListener = () => {
    for (let i = 0; i < this.HTML.accordionItems.length; i++) {
      this.HTML.accordionItems[i].addEventListener("click", event => {
        this.toggleAccordionItem(i);
      });
    }
  };
}

const offer = new Offer();

offer.renderAccordionItems();
offer.initEventListener();

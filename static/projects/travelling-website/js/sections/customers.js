"use strict";

class Customers {
  constructor() {
    this.customerParticles = [
      { image: "./static/images/customers/customer-2.jpg" },
      { image: "./static/images/customers/customer-3.jpg" },
      { image: "./static/images/customers/customer-4.jpg" },
      { image: "./static/images/customers/customer-5.jpg" },
      { image: "./static/images/customers/customer-6.jpg" },
      { image: "./static/images/customers/customer-7.jpg" },
      { image: "./static/images/customers/customer-8.jpg" }
    ];

    this.customerSlides = [
      {
        customer: {
          name: "Limmie Blaine",
          image: "./static/images/customers/customer-1.jpg",
          job: "UI/UX Designer"
        },
        message:
          "Haven't travelled a year, I had one free week from work, so I decided to travel from Ravel to Portugal. It was my best vacation ever. Thank you"
      },
      {
        customer: {
          name: "Selim Ata",
          image: "./static/images/customers/customer-2.jpg",
          job: "UI/UX Designer"
        },
        message: "Cannot pick a word. This is good!"
      },
      {
        customer: {
          name: "Sakura",
          image: "./static/images/customers/customer-3.jpg",
          job: "UI/UX Designer"
        },
        message:
          "I cannot imagine how handled this without you. Travelling is best hobby for me! I have travelled with you to Turkey and Spain, last one was very interesting. Thank you)"
      },
      {
        customer: {
          name: "Limmie Blaine",
          image: "./static/images/customers/customer-4.jpg",
          job: "UI/UX Designer"
        },
        message:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum culpa labore, expedita sed similique voluptatem commodi inventore alias dolor? Veritatis, animi quisquam fugit aliquid dolor praesentium ab sequi minima tempore."
      },
      {
        customer: {
          name: "Limmie Blaine",
          image: "./static/images/customers/customer-5.jpg",
          job: "UI/UX Designer"
        },
        message:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum culpa labore, expedita sed similique voluptatem commodi inventore alias dolor? Veritatis, animi quisquam fugit aliquid dolor praesentium ab sequi minima tempore."
      },
      {
        customer: {
          name: "Limmie Blaine",
          image: "./static/images/customers/customer-6.jpg",
          job: "UI/UX Designer"
        },
        message:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum culpa labore, expedita sed similique voluptatem commodi inventore alias dolor? Veritatis, animi quisquam fugit aliquid dolor praesentium ab sequi minima tempore."
      },
      {
        customer: {
          name: "Limmie Blaine",
          image: "./static/images/customers/customer-7.jpg",
          job: "UI/UX Designer"
        },
        message:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum culpa labore, expedita sed similique voluptatem commodi inventore alias dolor? Veritatis, animi quisquam fugit aliquid dolor praesentium ab sequi minima tempore."
      }
    ];

    this.currentSlide = {
      customer: {
        name: "Limmie Blaine",
        image: "./static/images/customers/customer-1.jpg",
        job: "UI/UX Designer"
      },
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum culpa labore, expedita sed similique voluptatem commodi inventore alias dolor? Veritatis, animi quisquam fugit aliquid dolor praesentium ab sequi minima tempore."
    };

    this.HTML = {
      customerParticles: document.getElementById("customers-particles"),
      slider: document.getElementById("customers-slider-slides"),
      pagination: document.getElementById("customers-slider-pagination")
    };
  }

  renderCustomerParticles = () => {
    let template = "";

    for (let i = 0; i < this.customerParticles.length; i++) {
      template += `
            <div class="customer-particle">
                <img src="${this.customerParticles[i].image}" />
            </div>
        `;
    }

    this.HTML.customerParticles.innerHTML = template;
  };

  renderCurrentSlide = () => {
    this.HTML.slider.innerHTML = `
    <div class="customers-slider-slide">
        <div class="customer">
            <div class="customer-image">
                <img src="${this.currentSlide.customer.image}" alt="">
            </div>
            <div class="customer-info">
                <h1>${this.currentSlide.customer.name}</h1>
                <p>${this.currentSlide.customer.job}</p>
            </div>
        </div>

        <div class="customer-message">
            <p>${this.currentSlide.message}</p>
        </div>
    </div>
    `;
  };

  renderPagination = () => {
    let template = "";
    for (let i = 0; i < this.customerSlides.length; i++) {
      template += `
            <div class="customers-slider-pagination-item"></div>
        `;
    }

    this.HTML.pagination.innerHTML = template;

    for (let i = 0; i < this.HTML.pagination.children.length; i++) {
      this.HTML.pagination.children[i].addEventListener("click", event => {
        this.changeCurrentSlide(i);
      });
    }
  };

  changeCurrentSlide = index => {
    this.currentSlide = this.customerSlides[index];
    this.removeActiveClassesFromPagination();
    this.HTML.pagination.children[index].classList.add("is-active");
    this.renderCurrentSlide();
  };

  removeActiveClassesFromPagination = () => {
    for (let i = 0; i < this.HTML.pagination.children.length; i++) {
      this.HTML.pagination.children[i].classList.remove("is-active");
    }
  };
}

const customers = new Customers();

customers.renderCustomerParticles();
customers.renderCurrentSlide();
customers.renderPagination();
customers.changeCurrentSlide(0);

import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creators';

const Home = {
  async render() {
    return `
      <div class="hero">
          <img src="./images/heros/hero-image.jpg" alt="Hero Image" />
          <p class="hero-text font-pp-semi-bold">Always Fresh.</p>
      </div>
      <section class="restaurant-list-container">
          <h2
              class="font-pp-medium restaurant-list-container__title text-center"
              id="main-content"
          >
              Discover Restaurant
          </h2>
          <hr class="divider" />
          <div class="restaurant-card-list-container"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getRestaurantList();
    const restaurantListContainer = document.querySelector('.restaurant-card-list-container');
    restaurants.forEach((restaurant) => {
      restaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;

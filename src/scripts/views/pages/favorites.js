import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createFavoriteRestaurantItemTemplate } from '../templates/template-creators';

const Favorite = {
  async render() {
    return `
      <div id="favorite-restaurant">
        <h1>Your Favorites</h1>

        <div class="favorite-restaurant-list">
          <p class="restaurant-item-not-found text-center">Belum Ada Restaurant Favorite</p>
        </div>
      </div>
    `;
  },

  async clearRestaurantList(restaurants) {
    const restaurantFavoriteContainer = document.querySelector('.favorite-restaurant-list');
    if (restaurants.length > 0) {
      restaurantFavoriteContainer.innerHTML = '';
    } else if (restaurants.length === 0) {
      restaurantFavoriteContainer.innerHTML = '<p class="restaurant-item-not-found text-center">Belum Ada Restaurant Favorite</p>';
    }
  },

  async getListFavorites() {
    const favoriteRestaurants = await FavoriteRestaurantIdb.getRestaurants();
    const restaurantFavoriteContainer = document.querySelector('.favorite-restaurant-list');

    this.clearRestaurantList(favoriteRestaurants);
    favoriteRestaurants.forEach((restaurant) => {
      restaurantFavoriteContainer.innerHTML += createFavoriteRestaurantItemTemplate(restaurant);
    });

    const removeFavoriteBtns = document.querySelectorAll('.favorite-restaurant-card__body-remove-favorite');
    this.addButtonListener(removeFavoriteBtns);
  },

  async addButtonListener(buttons) {
    buttons.forEach((button) => {
      button.addEventListener('click', async (event) => {
        const { id } = event.currentTarget.dataset;
        await FavoriteRestaurantIdb.deleteRestaurant(id);
        await this.getListFavorites();
      });
    });
  },

  async afterRender() {
    await this.getListFavorites();
  },
};

export default Favorite;

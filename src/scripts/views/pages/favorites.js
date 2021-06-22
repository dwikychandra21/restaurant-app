import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createFavoriteRestaurantItemTemplate } from '../templates/template-creators';

const Favorite = {
  async render() {
    return `
      <div id="favorite-restaurant">
        <h1>Your Favorites</h1>

        <div class="favorite-restaurant-list">
          <p class="text-center">Belum Ada Restaurant Favorite</p>
        </div>
      </div>
    `;
  },

  async getListFavorites() {
    const favoriteRestaurants = await FavoriteRestaurantIdb.getRestaurants();
    const restaurantFavoriteContainer = document.querySelector('.favorite-restaurant-list');

    if (favoriteRestaurants.length > 0) {
      restaurantFavoriteContainer.innerHTML = [];
    }
    favoriteRestaurants.forEach((restaurant) => {
      restaurantFavoriteContainer.innerHTML += createFavoriteRestaurantItemTemplate(restaurant);
    });
  },

  async afterRender() {
    await this.getListFavorites();

    const removeFavoriteBtns = document.querySelectorAll('.favorite-restaurant-card__body-remove-favorite');
    removeFavoriteBtns.forEach((button) => {
      button.addEventListener('click', (event) => {
        (async () => {
          const { id } = event.currentTarget.dataset;
          await FavoriteRestaurantIdb.deleteRestaurant(id);
          await this.getListFavorites();
        })();
      });
    });
  },
};

export default Favorite;

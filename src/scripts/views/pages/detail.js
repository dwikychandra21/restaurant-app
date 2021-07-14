import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { createRestaurantDetailTemplate } from '../templates/template-creators';

const Detail = {
  async render() {
    return `
      <div id="restaurant-detail"></div>
    `;
  },

  tabMenuClickHandler(event) {
    const currentActiveTabElement = document.querySelector(
      '.restaurant-detail__body-menu-item.active'
    );
    currentActiveTabElement.classList.remove('active');
    this.classList.add('active');

    const idTargetElement = event.target.dataset.target;
    const targetElement = document.querySelector(`${idTargetElement}`);
    const currentActiveElement = document.querySelector(
      '.restaurant-detail__body-menu-detail-content.active'
    );

    currentActiveElement.classList.remove('active');
    targetElement.classList.add('active');
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getRestaurantDetail(url.id);
    const restaurantDetailContainer =
      document.querySelector('#restaurant-detail');
    restaurantDetailContainer.innerHTML =
      createRestaurantDetailTemplate(restaurant);

    const menuTabItems = document.querySelectorAll(
      '.restaurant-detail__body-menu-item'
    );
    menuTabItems.forEach((item) => {
      item.addEventListener('click', this.tabMenuClickHandler);
    });

    const idbRestaurantPayload = {
      id: restaurant.id,
      name: restaurant.name,
      city: restaurant.city,
      description: restaurant.description,
      rating: restaurant.rating,
      pictureId: restaurant.pictureId,
    };
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector(
        '.restaurant-detail__header-add2favorites'
      ),
      restaurant: idbRestaurantPayload,
    });
  },
};

export default Detail;

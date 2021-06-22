import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
    <a href="#/detail/${restaurant.id}">
        <div class="restauran-card">
            <div class="restauran-card__header">
                <div class="restauran-card__header__location flex items-center">
                    <img
                        src="${CONFIG.BASE_EXTERNAL_IMG_URL}/location_epvlzu.svg"
                        alt="Location Icon"
                        width="14"
                    />
                    ${restaurant.city}
                </div>
                <div class="restauran-card__header__rating">
                    <img
                        src="${CONFIG.BASE_EXTERNAL_IMG_URL}/star_3_jqy0go.svg"
                        alt="Star Icon"
                    />
                    ${restaurant.rating}
                </div>
                <img
                    class='main-img'
                    src='${CONFIG.BASE_IMG_URL}/${restaurant.pictureId}'
                    alt='${restaurant.name} Image'
                />
            </div>
            <div class="restauran-card__body">
                <h3 class="restauran-card__body__title">${restaurant.name}</h3>
                <p class="restauran-card__body__desc">
                    ${restaurant.description.slice(0, 200)}...
                </p>
            </div>
        </div>
    </a>
  `;

const createRestaurantDetailTemplate = (restaurant) => `
        <div class="restaurant-detail__header">
            <div class="restaurant-detail__header-img">
                <img src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="">
                <div class="restaurant-detail__header-add2favorites">
                </div>
            </div>
            <div class="restaurant-detail__header-body">
              <h1>${restaurant.name} - ${restaurant.city}</h1>
              <p>${restaurant.description}</p>
              <p class="restaurant-detail__header-body-categories">
                ${restaurant.categories.map((category) => category.name).join(', ')}
              </p>
              <div class="restaurant-detail__header-body-rating-address flex items-center">
                  <span class="flex items-center mr-3">
                    <img
                      src="${CONFIG.BASE_EXTERNAL_IMG_URL}/star_3_jqy0go.svg"
                      alt="Star Icon"
                      width="16"
                      class="mr-1"
                    />
                    ${restaurant.rating}
                  </span>
                  <span class="flex items-center">
                    <img
                        src="${CONFIG.BASE_EXTERNAL_IMG_URL}/location_epvlzu.svg"
                        alt="Location Icon"
                        width="16"
                        class="mr-1"
                    />
                    ${restaurant.address}
                  </span>
              </div>
            </div>
        </div>

        <div class="restaurant-detail__body">
            <div class="restaurant-detail__body-menu">
              <h2>Our Menus</h2>
              <div class="restaurant-detail__body-menu-items">
                  <div class="restaurant-detail__body-menu-items-wrapper">
                    <span class="restaurant-detail__body-menu-item active" data-target="#foods">Food</span>
                    <span class="restaurant-detail__body-menu-item" data-target="#drinks">Drinks</span>
                  </div>
              </div>
              <div class="restaurant-detail__body-menu-details">
                  <div id="foods" class="restaurant-detail__body-menu-detail-content active">
                    <ul>
                      ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
                    </ul>
                  </div>
                  <div id="drinks" class="restaurant-detail__body-menu-detail-content">
                    <ul>
                      ${restaurant.menus.drinks.map((deink) => `<li>${deink.name}</li>`).join('')}
                    </ul>
                  </div>
              </div>
            </div>

          <div class="restaurant-detail__body-reviews">
              <h2>Customer Reviews</h2>
              <div class="restaurant-detail__body-reviews-cards">
                  ${restaurant.customerReviews.map((review) => `
                    <div class="restaurant-detail__body-reviews-cards__item">
                        <div class="restaurant-detail__body-reviews-cards__item-header flex items-center">
                          <p>
                            <span class="restaurant-detail__body-reviews-cards__item-header-name font-pp-semi-bold">${review.name}</span> •
                            <span class="restaurant-detail__body-reviews-cards__item-header-date">${review.date}</span></p>
                        </div>
                        <p class="restaurant-detail__body-reviews-cards__item-comment">${review.review}</p>
                    </div>
                    `).join('')}
              </div>
            </div>
        </div>
  `;

const createLikeButtonTemplate = () => `
  <button type="button" id="likeButton" class="font-pp-semi-bold flex items-center justify-center">
    <img
      src="${CONFIG.BASE_EXTERNAL_IMG_URL}/heart-green-outline_lntkci.svg"
      width="16"
      class="mr-2"
    /> Add to Favorites
  </button>
`;

const createLikedButtonTemplate = () => `
  <button type="button" id="likeButton" class="font-pp-semi-bold flex items-center justify-center">
    <img
      src="${CONFIG.BASE_EXTERNAL_IMG_URL}/heart-green_mpqrwo.svg"
      width="16"
      class="mr-2"
    /> Liked!
  </button>
`;

const createFavoriteRestaurantItemTemplate = (restaurant) => `
  <div class="favorite-restaurant-card">
    <div class="favorite-restaurant-card__img-container">
      <a href="#/detail/${restaurant.id}">
        <img src="${CONFIG.BASE_IMG_URL}/${restaurant.pictureId}" />
      </a>
    </div>
    <div class="favorite-restaurant-card__body">
        <a href="#/detail/${restaurant.id}" class="text-decoration-none">
          <h2>${restaurant.name} - ${restaurant.city}</h2>
        </a>
        <p>${restaurant.description.slice(0, 80)}...</p>
        <div class="favorite-restaurant-card__body-footer flex items-center justify-between">
          <div class="favorite-restaurant-card__body-rating flex items-center">
            <img
              src="${CONFIG.BASE_EXTERNAL_IMG_URL}/star_3_jqy0go.svg"
              alt="Star Icon"
              width="16"
              class="mr-1"
            /><p class="font-pp-medium">${restaurant.rating}</p>
          </div>
          <button class="favorite-restaurant-card__body-remove-favorite" data-id="${restaurant.id}">
            <img src="${CONFIG.BASE_EXTERNAL_IMG_URL}/trash-grey-outline_nymsm6.svg" width="20" />
          </button>
        </div>
    </div>
  </div>
`;

export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteRestaurantItemTemplate,
};

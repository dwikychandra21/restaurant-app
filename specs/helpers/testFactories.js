import LikeButtonPresenter from "../../src/scripts/utils/like-button-presenter";

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector(
      '.restaurant-detail__header-add2favorites'
    ),
    restaurant
  });
}

export { createLikeButtonPresenterWithRestaurant };

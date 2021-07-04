import * as TestFactories from './helpers/testFactories';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

const addLikeButtonContainer = () => {
  document.body.innerHTML =
    '<div class="restaurant-detail__header-add2favorites"></div>';
};

describe('Liking a restaurant', () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should display like widget when the restaruant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({
      id: 1,
    });

    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeTruthy();
  });

  it('should not display unlike widget when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeFalsy();
  });

  it('should be able like the restarurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getRestaurants()).toEqual([{ id: 1 }]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('shout not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getRestaurants()).toEqual([]);
  });
});

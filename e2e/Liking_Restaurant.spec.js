const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Belum Ada Restaurant Favorite', '.favorite-restaurant-list .restaurant-item-not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant-card-list-container a');

  const firstRestaurant = locate('.restaurant-card-list-container a').first();
  const firstRestaurantTitleElement = locate('.restauran-card__body__title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurantTitleElement);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.favorite-restaurant-card');
  const likedRestaurantTitle = await I.grabTextFrom('.favorite-restaurant-card__name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Belum Ada Restaurant Favorite', '.favorite-restaurant-list .restaurant-item-not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant-card-list-container a');

  const firstRestaurant = locate('.restaurant-card-list-container a').first();
  const firstRestaurantTitleElement = locate('.restauran-card__body__title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurantTitleElement);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.favorite-restaurant-card');
  const likedRestaurantTitle = await I.grabTextFrom('.favorite-restaurant-card__name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click('.favorite-restaurant-card__body a');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.see('Belum Ada Restaurant Favorite', '.favorite-restaurant-list .restaurant-item-not-found');
});

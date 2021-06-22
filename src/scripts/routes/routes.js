import HomePage from '../views/pages/home';
import DetailPage from '../views/pages/detail';
import Favorite from '../views/pages/favorites';

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/detail/:id': DetailPage,
  '/favorite': Favorite,
};

export default routes;

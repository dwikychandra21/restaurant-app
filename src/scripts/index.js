import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/utility.css';
import '../styles/detail.css';
import '../styles/favorite.css';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.burger-menu'),
  drawer: document.querySelector('.off-canvas-container'),
  drawerButton: document.querySelector('.close-menu'),
  drawerNavItems: document.querySelectorAll('.off-canvas-navbar a'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

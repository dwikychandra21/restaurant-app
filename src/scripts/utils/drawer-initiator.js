const DrawerInitiator = {
  init({
    button, drawer, drawerButton, drawerNavItems,
  }) {
    button.addEventListener('click', (event) => {
      this._openDrawer(event, drawer);
      this._animateDrawerNavItems(drawerNavItems);
    });

    drawerButton.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _openDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.add('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  _animateDrawerNavItems(navItems) {
    navItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('slide-right');
      }, 200 * (index + 1));
    });
  },
};

export default DrawerInitiator;

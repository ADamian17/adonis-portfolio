declare module '*.scss';

declare namespace MainNav {
  type MenuItemType = {
    menuLink: Queries.ContentfulMenuItem['menuLink'];
    menuLabel: Queries.ContentfulMenuItem['menuLabel'];
    menuIcon: Queries.ContentfulMenuItem['menuIcon'];
    menuTarget: Queries.ContentfulMenuItem['menuLabel'] | null;
  };

  type MenuItemsListType = {
    navItems: MenuItemType[];
  };
}

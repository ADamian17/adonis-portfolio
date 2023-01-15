declare module '*.scss';

declare namespace MainNav {
  type MenuItemType = {
    path: string;
    label: string;
    icon: string;
    target: React.AnchorHTMLAttributes<HTMLAnchorElement>['target'] | null;
  };

  type MenuItemsListType = {
    navItems: MenuItemType[];
  };
}

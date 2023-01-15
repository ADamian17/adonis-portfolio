import React from 'react'
import CustomLink from '../../../components/CustomLink';
import MenuItem from '../MenuItem';

const MenuItemList: React.FC<MainNav.MenuItemsListType> = ({ navItems }) => {
  return (
    <>
      {
        navItems.map((navItem) => <MenuItem {...navItem} />)
      }
    </>
  )
}

export default MenuItemList;
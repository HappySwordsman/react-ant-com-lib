import { FC } from 'react';
import { MenuProps } from './Menu';
import { SubMenuProps } from './SubMenu';
import { MenuItemProps } from './MenuItem';
export declare type IMenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransMenu: IMenuComponent;
export default TransMenu;

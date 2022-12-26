/*
 * @Author: yexiaolong
 * @Date: 2022-12-26 15:03:43
 * @Description: 
 */
import type { FC } from 'react'
import Menu from './Menu'
import type { MenuProps }  from './Menu'
import SubMenu from './SubMenu'
import type { SubMenuProps } from './SubMenu'
import MenuItem from './MenuItem'
import type { MenuItemProps } from './MenuItem'

export type IMenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>,
    SubMenu: FC<SubMenuProps>
}

const TransMenu = Menu as IMenuComponent

TransMenu.Item = MenuItem
TransMenu.SubMenu = SubMenu

export default TransMenu

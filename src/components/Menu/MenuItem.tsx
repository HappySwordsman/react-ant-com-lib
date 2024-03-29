/*
 * @Author: yexiaolong
 * @Date: 2022-12-26 15:03:43
 * @Description: 
 */
import React, { useContext } from 'react'
import classNames from "classnames";
import { MenuContext } from './Menu'
export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, children, style } = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  const handleClick = () => {
    if (context.onSelect && !disabled && (typeof index === 'string')) {
      context.onSelect(index)
    }
  }
  return (
    <MenuContext.Consumer>
      {
        () =>
          (<li className={classes} style={style} onClick={handleClick}>
            { children }
          </li>)
      }
    </MenuContext.Consumer>
  )
}
MenuItem.displayName= 'MenuItem'
export default MenuItem
import React, { useContext } from 'react'
import classNames from "classnames";
import { MenuContext } from './Menu'
export interface MenuItemProps {
  index?: number;
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
    if (context.onSelect && !disabled && (typeof index === 'number')) {
      context.onSelect(index)
    }
  }
  return (
    <MenuContext.Consumer>
      {
        ({index}) =>
          <li className={classes} style={style} onClick={handleClick}>
            { children }
          </li>
      }
    </MenuContext.Consumer>
  )
}
MenuItem.displayName= 'MenuItem'
export default MenuItem
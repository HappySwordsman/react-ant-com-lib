import React from 'react'
import classNames from 'classnames'
import Icon from "../Icon/icon";

/** 按钮的尺寸枚举 **/
export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}
/** 按钮的类型枚举 **/
export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}
/** 按钮属性接口 **/
interface BaseButtonProps {
    className ?: string;
    /**
     * 设置 Button 的禁用
     **/
    disabled ?: boolean;
    /**
     * 设置 Button 的尺寸
     **/
    size ?: ButtonSize;
    /**
     * 设置 Button 的类型
     **/
    btnType ?: ButtonType;
    children: React.ReactNode;
    href ?: string;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * 这是我们的第一个 Button 组件
 * ## Button header
 * ~~~js
 * import { Button } from 'hanppyVikingship'
 * ~~~
 * @param props
 * @constructor
 */
export const Button: React.FC<ButtonProps> = (props) => {
    const {
      btnType,
      className,
      disabled,
      size,
      children,
      href,
      ...restProps
    } = props
  // btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })
  if (btnType === ButtonType.Link && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
          <Icon icon='coffee' />
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button

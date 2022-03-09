import React, {ReactElement, InputHTMLAttributes, ChangeEvent} from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import classNames from 'classnames'
import Icon from '../Icon/icon'

type InputSize = 'lg' | 'sm'
/** Omit类似重写机制，重写接口中的某一个值 **/
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean;
  size?: InputSize;
  icon?: IconProp;
  prepend?: string | ReactElement;
  append?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props) => {
  // 取出各种的属性
  const { disabled, size, icon, prepend, append, style, ...restProps } = props
  // 根据属性计算不同的 className
  const cnames = classNames('happy-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend
  })
  return (
    // 根据属性判断是否要添加特定的节点
    <div className={cnames} style={style}>
      {prepend && <div className='happy-input-group-prepend'>{prepend}</div>}
      {icon && <div className='icon-wrapper'><Icon icon={icon} title={`title-${icon}`} /></div>}
      <div className='icon-wrapper'><Icon icon='apple' title={`title-${icon}`} /></div>
      <input
        className="happy-input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className='happy-input-group-append'>{append}</div>}
    </div>
  )
}

export default Input
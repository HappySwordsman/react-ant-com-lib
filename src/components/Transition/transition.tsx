/*
 * @Author: yexiaolong
 * @Date: 2022-12-26 15:03:43
 * @Description: 
 */
import React from 'react'
import { CSSTransition } from 'react-transition-group'
import type { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-right' | 'zoom-in-bottom'

type TransitionProps = CSSTransitionProps & {
  classNames?: string,
  animation?: AnimationName,
  wrapper?: boolean
}

const Transition: React.FC<TransitionProps> = (props) => {
  const {
    children,
    classNames,
    animation,
    wrapper,
    ...restProps
  } = props
  return (
    <CSSTransition
      classNames = { classNames ? classNames : animation }
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}
Transition.defaultProps = {
  unmountOnExit: true,
  appear: true
}

export default Transition
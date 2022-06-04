import React from 'react';
/** 按钮的尺寸枚举 **/
export declare enum ButtonSize {
    Large = "lg",
    Small = "sm"
}
/** 按钮的类型枚举 **/
export declare enum ButtonType {
    Primary = "primary",
    Default = "default",
    Danger = "danger",
    Link = "link"
}
/** 按钮属性接口 **/
interface BaseButtonProps {
    className?: string;
    /**
     * 设置 Button 的禁用
     **/
    disabled?: boolean;
    /**
     * 设置 Button 的尺寸
     **/
    size?: ButtonSize;
    /**
     * 设置 Button 的类型
     **/
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}
declare type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * 这是我们的第一个 Button 组件
 * ## Button header
 * ~~~js
 * import { Button } from 'hanppyVikingship'
 * ~~~
 * @param props
 * @constructor
 */
export declare const Button: React.FC<ButtonProps>;
export default Button;

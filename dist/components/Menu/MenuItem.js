import React, { useContext } from 'react';
import classNames from "classnames";
import { MenuContext } from './Menu';
var MenuItem = function (props) {
    var index = props.index, disabled = props.disabled, className = props.className, children = props.children, style = props.style;
    var context = useContext(MenuContext);
    var classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    });
    var handleClick = function () {
        if (context.onSelect && !disabled && (typeof index === 'string')) {
            context.onSelect(index);
        }
    };
    return (React.createElement(MenuContext.Consumer, null, function (_a) {
        var index = _a.index;
        return React.createElement("li", { className: classes, style: style, onClick: handleClick }, children);
    }));
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;

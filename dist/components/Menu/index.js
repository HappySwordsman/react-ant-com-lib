import Menu from './Menu';
import SubMenu from './SubMenu';
import MenuItem from './MenuItem';
var TransMenu = Menu;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;
export default TransMenu;

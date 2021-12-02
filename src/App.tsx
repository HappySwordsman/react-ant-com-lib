import React from 'react';
import Button, {ButtonSize, ButtonType} from "./components/Button/button";
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'
import SubMenu from './components/Menu/SubMenu'

function App() {
  return (
    <div className="App" style={{padding: '10px'}}>
      <Menu defaultIndex={'0'} onSelect={(index) => alert(index)} mode={"vertical"} defaultOpenSubMenus={['2']}>
        <MenuItem>
          cool link
        </MenuItem>
        <MenuItem disabled>
          cool link2
        </MenuItem>
        <SubMenu title='dropdown'>
          <MenuItem>dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
        </SubMenu>
        <MenuItem>
          cool link3
        </MenuItem>
      </Menu>

      <Button disabled className={'custom'}> Hello </Button>
      <Button autoFocus onClick={(e) => {e.preventDefault();alert(123)}} btnType={ButtonType.Primary} size={ButtonSize.Small}> Hello small </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Hello large </Button>
      <Button btnType={ButtonType.Default} size={ButtonSize.Large}> Hello large </Button>
      <Button btnType={ButtonType.Link} href="http://www.imooc.com" disabled> Imooc Link </Button>
      <Button btnType={ButtonType.Link} href="http://www.imooc.com" target={"_blank"}> Imooc Link </Button>
    </div>
  );
}

export default App;

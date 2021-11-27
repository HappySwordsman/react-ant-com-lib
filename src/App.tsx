import React from 'react';
import Button, {ButtonSize, ButtonType} from "./components/Button/button";
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'

function App() {
  return (
    <div className="App">
      <Menu defaultIndex={0} onSelect={(index) => alert(index)}>
        <MenuItem index={0}>
          cool link
        </MenuItem>
        <MenuItem index={1}>
          cool link2
        </MenuItem>
        <MenuItem index={2}>
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

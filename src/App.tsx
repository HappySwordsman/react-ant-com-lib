import React, { useState } from 'react';
import Button, {ButtonSize, ButtonType} from "./components/Button/button";
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'
import SubMenu from './components/Menu/SubMenu'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Transition from './components/Transition/transition'
library.add(fas)

function App() {
  const [ show, setShow ] = useState<boolean>(false)
  return (
    <div className="App" style={{padding: '10px'}}>
      <Menu defaultIndex={'0'} onSelect={(index) => alert(index)} defaultOpenSubMenus={['2']}>
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
      <div>
        <Button size={ButtonSize.Large} onClick={() => setShow(!show) }>Toggle</Button>
        <Transition
          in={show}
          timeout={300}
          animation='zoom-in-left'
        >
          <div>
            <div>沙发斯蒂芬1斯蒂芬1斯蒂芬1斯蒂芬1斯蒂芬1斯蒂芬1斯蒂芬1</div>
            <div>沙发斯蒂芬斯蒂芬1斯蒂芬1斯蒂芬1斯蒂芬2斯蒂芬1斯蒂芬1</div>
            <div>沙发斯蒂芬3沙发斯蒂芬斯蒂芬1斯蒂芬1斯蒂芬1斯蒂芬2斯蒂芬1斯蒂芬1</div>
            <div>沙发斯蒂芬4沙发斯蒂芬斯蒂芬1斯蒂芬1斯蒂芬1斯蒂芬2斯蒂芬1斯蒂芬1</div>
            <div>沙发斯蒂芬5沙发斯蒂芬斯蒂芬1斯蒂芬1斯蒂芬1斯蒂芬2斯蒂芬1斯蒂芬1</div>
            <div>沙发斯蒂芬6沙发斯蒂芬斯蒂芬1斯蒂芬1斯蒂芬1斯蒂芬2斯蒂芬1斯蒂芬1</div>
            <div>沙发斯蒂芬7沙发斯蒂芬斯蒂芬1斯蒂芬1斯蒂芬1斯蒂芬2斯蒂芬1斯蒂芬1</div>
          </div>
        </Transition>
        <Transition
          in={show}
          timeout={500}
          animation='zoom-in-top'
        >
          <div>
            <Button size={ButtonSize.Large} >ffffffffffffffffffff</Button>
          </div>
        </Transition>
      </div>
    </div>
  );
}

export default App;

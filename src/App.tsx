import React from 'react';
import Button, {ButtonSize, ButtonType} from "./components/Button/button";

function App() {
  return (
    <div className="App">
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

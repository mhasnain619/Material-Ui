
import './App.css'
import { ButtonGroup, Button } from "@mui/material";
import Buttonpo from './components/Buttonpo';
import CheckBox from './components/CheckBox';
import RadioBtn from './components/RadioBtn';
import Slider from './components/SliDer';


function App() {

  return (
    <>
      <Buttonpo />
      <div className='App'>
        <h1>React Material Ui | ButtonGroup</h1>
        < ButtonGroup orientation='horizontal' color='warning' variant='outlined'>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button>Three</Button>
          <Button>Three</Button>
          <Button>Three</Button>
          <Button>Three</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <CheckBox />
        <RadioBtn />
        <Slider />
      </div>
    </>
  )
}

export default App

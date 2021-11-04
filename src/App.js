import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Number from './Components/Number'
import Word from './Components/Word'
import ColorWord from './Components/ColorWord'


function App() {
  return (
    <BrowserRouter className="App">
      <header className="App-header">
        <h1>Routing Practice</h1>
      </header>
      <Switch>
        <Route exact path='/home'>
          <h1>Welcome</h1>
        </Route>
        <Route exact path='/:input'>
          <Number></Number>
        </Route>
        <Route path='/:word/:color1/:color2'>
          <ColorWord></ColorWord>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

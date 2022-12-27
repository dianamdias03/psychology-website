import './App.css';
import { Main } from './components/main/main';
import { NavMenu } from './components/nav-menu/navmenu';

function App() {
  return (
    <div className="App">
      <div className="main">
        <NavMenu></NavMenu>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;

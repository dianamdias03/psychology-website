import './App.css';
import { Main } from './components/main/main';
import { NavMenu } from './components/nav-menu/navmenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <NavMenu></NavMenu>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;

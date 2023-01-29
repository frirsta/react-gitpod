import logo from './logo.svg';
import './App.css';
import StatefulComponent from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
<StatefulComponent greeting="I am a statefull class component" name="Frirsta" />
    </div>
  );
}

export default App;

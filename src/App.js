import logo from './logo.svg';
import './App.css';
import Button from './component/Button.js';
import FunctionalComponent from './component/ClassComponent.js';
import ClassComponent from './component/FunctionalComponent.js';
import Calculator from './component/Calculator.js';

function App() {
  return (
    <div>
      <center>
      <h1>My React App</h1>

      <Calculator />
      </center>
    </div>
  );
}

export default App;

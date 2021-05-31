import './App.css';
import VendingMachine from './VendingMachine';
import { BrowserRouter } from 'react-router-dom';

/**
 * Renders VendingMachine React App
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VendingMachine />
      </BrowserRouter>
    </div>
  );
}

export default App;

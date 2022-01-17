import './App.css';
import Lights from './routes/Lights';
import Start from './routes/Start';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/lights" element={<Start></Start>}></Route>
          <Route
            path="/lights/green"
            element={<Lights currentLight="green" />}
          ></Route>
          <Route
            path="/lights/yellow"
            element={<Lights currentLight="yellow" />}
          ></Route>
          <Route
            path="/lights/red"
            element={<Lights currentLight="red" />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

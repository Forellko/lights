import './App.css';
import Green from './routes/Green';
import Yellow from './routes/Yellow';
import Red from './routes/Red';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/green" element={<Green />}></Route>
          <Route path="/yellow" element={<Yellow />}></Route>
          <Route path="/red" element={<Red />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

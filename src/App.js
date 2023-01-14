import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import HeadTail from './component/Head&Tail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/headTail" element={<HeadTail />}/>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import Messages from './Components/Messages';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/messages' element={<Messages />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

import './App.css';
import {Week3} from './challenges';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Week3 />} />
      <Route path="week3" element={<Week3 />} />
      <Route path="*" element={<Week3 />} />
    </Routes>
      
    
  );
}

export default App;

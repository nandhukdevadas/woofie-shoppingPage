import './App.css';
import Shopping from './Components/Shopping';
import Food from './Components/Pages/Food';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/Shopping' element={<Shopping/>}></Route>
      <Route path='/Shopping/Food' element={<Food/>}></Route>
    </Routes>
  );
}

export default App;

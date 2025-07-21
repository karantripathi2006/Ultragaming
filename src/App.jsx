import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../component/Home';
import DiscountPage from './pages/DiscountPage';
import BestCategoryPage from './pages/BestCategoryPage';
import MostPlayedPage from './pages/MostPlayedPage';
import HelpPage from './pages/Help';
import Nav from '../component/Nav';
import GameDetail from './pages/GameDetail';
import Login from '../component/Login';
import Signup from '../component/Signup';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Login />} />         
        <Route path="/signup" element={<Signup />} />    
        <Route path="/home" element={<><Nav /><Home /></>} /> 
        <Route path="/discount" element={<><Nav /><DiscountPage /></>} />
        <Route path="/best-category" element={<><Nav /><BestCategoryPage /></>} />
        <Route path="/most-played" element={<><Nav /><MostPlayedPage /></>} />
        <Route path="/help" element={<><Nav /><HelpPage /></>} />
        <Route path="/game/:id" element={<><Nav /><GameDetail /></>} />
      </Routes>
    </Router>
  );
}

export default App;

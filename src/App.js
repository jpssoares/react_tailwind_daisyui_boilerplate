
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//import pages
import Home from './pages/Home';


const App = () => {
  
  return <div className='overflow-hidden'>
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          
        </Routes>
      </Router>
  </div>;
};

export default App;
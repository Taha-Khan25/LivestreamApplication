
import './App.css';
import OverlayManager from './Components/OverlayManager';
import OverlayForm from './Components/OverlayForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import OverlayList from './Components/OverlayList';
import UpdateOverlay from './Components/OverlayUpdate';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
              <Route exact path="/" element={<OverlayManager />} />
              <Route path="/create" element={<OverlayForm />} />
              <Route path='/list' element={<OverlayList />}/>
              <Route path='/update/:id' element={<UpdateOverlay />}/>

        </Routes>
      </Router>
  </div>
);
}

export default App;

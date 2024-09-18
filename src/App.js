import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import DashboardLayout from './layout/DashboardLayout';
import MainNavigations from './layout/MainNavigation';


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path ='/' element={<DashboardLayout/>} /> */}
        <Route path='/' element= {<MainNavigations/>}/>
        
      </Routes>
    </Router>

  );
}

export default App;

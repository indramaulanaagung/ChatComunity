import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import DashboardLayout from './layout/DashboardLayout';
import MainNavigations from './layout/MainNavigation';
import MainWidget from './widgets/MainWidgets';
import Community from './Pages/Community/Community';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<MainNavigations/>}/>
        <Route path='/MainWidgets' element={<MainWidget/>} />
        <Route path='/Community' element={<Community/>} />
      </Routes>
    </Router>

  );
}

export default App;

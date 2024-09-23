import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import DashboardLayout from './layout/DashboardLayout';
import MainNavigations from './layout/MainNavigation';
import MainWidget from './widgets/MainWidgets';



function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path ='/' element={<DashboardLayout/>} /> */}
        <Route path='/' element= {<MainNavigations/>}/>
        <Route path='/' element={<MainWidget/>} />
      </Routes>
    </Router>

  );
}

export default App;

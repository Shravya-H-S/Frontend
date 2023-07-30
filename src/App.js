
import './App.css';
import Layout from './components/Layout/Layout';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import AppFooter from './components/Layout/AppFooter';
import AppHeader from './components/Layout/AppHeader';
import SideMenu from './components/Layout/SideMenu';
import Auth from './pages/Auth';
function App() {
  return (
    <div className='App' >
     
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<Auth/>}/>
     </Routes>
     </BrowserRouter>
    
    
    </div>
  );
}

export default App;

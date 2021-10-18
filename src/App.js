import logo from './logo.svg';
import './App.css';
import SiteNavbar from './pages/SharedComponents/SiteNavbar/SiteNavbar';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <SiteNavbar></SiteNavbar>
      <HomePage></HomePage>
    </div>
  );
}

export default App;

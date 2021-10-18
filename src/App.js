import './App.css';
import SiteNavbar from './pages/SharedComponents/SiteNavbar/SiteNavbar';
import HomePage from './pages/HomePage/HomePage';
import Footer from './pages/SharedComponents/Footer/Footer';

function App() {
  return (
    <div className="App">
      <SiteNavbar></SiteNavbar>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

export default App;

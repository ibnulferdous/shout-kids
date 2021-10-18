import './App.css';
import SiteNavbar from './pages/SharedComponents/SiteNavbar/SiteNavbar';
import HomePage from './pages/HomePage/HomePage';
import Footer from './pages/SharedComponents/Footer/Footer';
import {
  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  return (
    <div className="App">
      <Router>
        <SiteNavbar></SiteNavbar>

        <Switch>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/register">
            <RegisterPage></RegisterPage>
          </Route>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="*">
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

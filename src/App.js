import './App.css';
import SiteNavbar from './pages/SharedComponents/SiteNavbar/SiteNavbar';
import HomePage from './pages/HomePage/HomePage';
import Footer from './pages/SharedComponents/Footer/Footer';
import {
  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AuthProvider from './contexts/AuthProvider';
import ServiceDetailsPage from './pages/ServiceDetailsPage/ServiceDetailsPage';
import PrivateRoute from './pages/LoginPage/PrivateRoute/PrivateRoute';
import AboutPage from './pages/AboutPage/AboutPage';
import BookSessionPage from './pages/BookSessionPage/BookSessionPage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <SiteNavbar></SiteNavbar>

          {/* Switch Starts */}
          <Switch>
            <Route path="/home">
              <HomePage></HomePage>
            </Route>
            <Route path="/about">
              <AboutPage></AboutPage>
            </Route>
            <PrivateRoute path="/book-a-session">
              <BookSessionPage></BookSessionPage>
            </PrivateRoute>
            <PrivateRoute path="/service-details/:serviceId">
              <ServiceDetailsPage></ServiceDetailsPage>
            </PrivateRoute>
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
          {/* Switch ends */}

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

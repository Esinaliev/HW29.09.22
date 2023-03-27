import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthContext from './contexts/AuthContext';
import PrivateRoutes from './routes/PrivateRoute';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import Home from './pages/Home'
import Navbar from './components/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
      integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
      crossOrigin="anonymous"></link>
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Router>
          <Navbar/>
          <div className="container-fluid">
            <Routes>
              <Route element={<PrivateRoutes isLoggedIn={isLoggedIn} />}>
                  <Route element={<Profile/>} path="/profile"/>
              </Route>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/logout" element={<Logout/>}/>
            </Routes>

          </div>
        </Router>
      </AuthContext.Provider>

    </div>
  );
}

export default App;

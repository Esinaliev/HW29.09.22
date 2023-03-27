import React , { useContext } from 'react';
import { Navigate } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext';

function Logout() {
    const { setIsLoggedIn } = useContext(AuthContext);
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    console.log("isLoggedIn")
  return (
    <div>
        <Navigate to="/login"/>
    </div>
  );
}

export default Logout;

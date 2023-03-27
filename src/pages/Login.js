import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      console.log(AuthContext);
      <Navigate to="/profile"/>
    } else {
      alert('Неверный логин или пароль');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label >Логин</label>
        <input type="text" className="form-control" placeholder="Логин" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <small className="form-text text-muted">логин user.</small>
      </div>
      <div className="form-group">
        <label >Пароль</label>
        <input type="password" className="form-control" placeholder="Пароль"  value={password} onChange={(e) => setPassword(e.target.value)}/>
        <small className="form-text text-muted">пароль password.</small>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Login;

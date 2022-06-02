import React, { useState } from 'react'
import axios from 'axios';
import { login } from './auth';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
  
    const doLogin = () => {
      axios.post('http://localhost:3007/login', { user, pass })
        .then(res => {
          console.log(res.data);
          if ('ok' === res.data.msg) {
            login(res.data.key);
            navigate('/admin/', { replace: true });
          }
        })
    }

  
  return (

<div >
<div id="form-container">
  <div className="question-container">
    <label id="name-label" className="question-label" >
      Username
    </label>
    <input
      type="username"
      className="row-input"
      placeholder="Enter your username"
      required
      onChange={e => setUser(e.target.value)}
    />
  </div>
  
  <div className="question-container">
    <label id="name-label" className="question-label" >
      Username
    </label>
    <input
      className="row-input"
      placeholder="Enter your password"
      required
      type="password" value={pass} onChange={e => setPass(e.target.value)} name="" aria-required/> 
  </div>
  <button id="submit" type="submit" onClick={doLogin}>
            Login
          </button>
  </div>
</div>
  );
}



export default Login;
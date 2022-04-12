import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useFirebase from "../../hooks/useFirebase";
import './Login.css'

const Login = () => {
  const { googleSignIn, user  } = useFirebase();
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from.pathname || '/';
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      const userr = result.user;
      navigate(from, {replace: true});
      console.log(userr);
    })
    .catch(error => {
      const errorMessage = error.message;
      setError(errorMessage);
      console.log(errorMessage);
    })

  }
  return (
    <div className="form-container">
    <div>
      <h2 className="form-title">Sign in</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id=""
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            required
          />
        </div>
        <p className="text-danger">{error}</p>
        <input className="form-submit" type="submit" value="Sign in" />
        <p>New User? <Link to={'/signup'}>Create an Account</Link></p>
      </form>
      <div className="oreo">
        <div>_____</div>
        <p style={{ margin: "0 10px", marginBottom: "5px" }}>or</p>
        <div>_____</div>
      </div>
      <button onClick={googleSignIn}>Sign In with Google</button>
    </div>
    
  </div>
  );
};

export default Login;

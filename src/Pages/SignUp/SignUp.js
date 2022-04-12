import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../../firebase.init";

const SignUp = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPass = event.target.confirmPassword.value;

    if (password !== confirmPass) {
        setError('Pass Doesnt Match')
      return;
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          setSuccess('Successfully Signed Up');
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div>
      <h2>Please Register Yourself</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" />
        <br />
        <input type="email" name="email" id="" placeholder="Your Email" />
        <br />
        <input type="password" name="password" id="" placeholder="Password" />
        <br />
        <input
          type="password"
          name="confirmPassword"
          id=""
          placeholder="Confirm Password"
        />
        <br />

        {
            success ? <p className="text-success">{success}</p> : <p className="text-danger">{error}</p>
        }
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;

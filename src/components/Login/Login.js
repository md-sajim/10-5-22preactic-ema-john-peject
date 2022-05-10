import React, { useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  const handleSubmitButton = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="from-container">
      <div>
        <form onSubmit={handleSubmitButton}>
          <h1 className="from-title">Login</h1>
          <div className="from-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              placeholder="Please give email"
              required
            />
          </div>
          {loading && <p>Loading.....</p>}
          <p style={{ color: "red" }}>{error?.message}</p>
          <div className="from-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              placeholder="Password"
              required
            />
          </div>

          <input className="from-submit" type="submit" value="Login" />
        </form>
        <p>
          New to ema-john?
          <Link className="from-link" to="/signup">
            Creat New Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

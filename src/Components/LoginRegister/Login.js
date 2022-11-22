import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "../Home/Home";
import "./login.css"

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("Password")
      .replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    
    if (!emaillog || !passwordlog) {
      setFlag(true);
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div id="register-container">
      {home ? (
        <form onSubmit={handleLogin} id="register-form">
          <h3 id="form-title">Ingresar</h3>
          <div className="form-group">
            <label className="fw-bolder">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="fw-bolder">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>
          <button type="submit" id="register-btn">
            Ingresar
          </button>
          {flag && (
            <Alert color="primary" variant="danger">
              Credenciales inválidas
            </Alert>
          )}
        </form>
      ) : (
        <Home/>
      )}
    </div>
  );
}

export default Login;

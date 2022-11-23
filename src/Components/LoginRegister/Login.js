import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "../Home/Home";
import Register from "./Register";
import "./login.css"
import { Navigate } from "react-router-dom";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);
  const [register, setRegister] = useState(true);
  // const navigate = useNavigate();

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

  function handleClick() {
    setRegister(!register);
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
          <p onClick={handleClick} className="forgot-password text-right register-direct">
            No tienes usuario?{" "} Ingresa aquí
            {/* {navigate("/Register")} */}
          </p>
          {flag && (
            <Alert color="primary" variant="danger">
              Credenciales inválidas
            </Alert>
          )}
        </form>
      ) : (
        <Navigate to='/home'/>
      )}
    </div>
  );
}

export default Login;

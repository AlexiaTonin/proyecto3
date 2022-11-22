import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import pokemoncover1 from "../../Assets/pokemoncover1.jpeg"
import Login from "./Login";
import "./register.css";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Contraseña", JSON.stringify(password));
      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <>
      <div>
        <img className="PK-img mb-0" src={pokemoncover1} alt="pikachu cover" />
      </div>
      <div id="register-container">
        {" "}
        {login ? (
          <form onSubmit={handleFormSubmit} id="register-form">
            <h3 id="form-title">Registro</h3>
            <div>
              <label className="fw-bolder">Nombre completo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingresar nombre completo"
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <label className="fw-bolder">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Ingresar email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <label className="fw-bolder">Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Ingresar contraseña"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button type="submit" id="register-btn">
              Registrarse
            </button>
            <p onClick={handleClick} className="forgot-password text-right login-direct">
              Ya tienes usuario?{" "} Ingresa aquí
            </p>
            {flag && (
              <Alert variant="danger">
                Por favor completar todos los campos
              </Alert>
            )}
          </form>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}

export default Registration;

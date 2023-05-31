// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import "./css/Login.css";
import { ContextProvider } from "../context/AppContext";
import { Login as LoginService } from "../services/user.service";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const loggedUser = useContext(ContextProvider);

  const [user, setUser] = useState({
    email: "gsanchez@empresa.com",
    password: "hola",
  });

  const navigate = useNavigate();

  const handleClick = () => {
    LoginService({ email: user.email, password: user.password })
      .then((res) => {
        if (res?.ok) {
          loggedUser.setUser({
            isLogged: true,
            token: res?.data,
            employeeId: res?.employeeId,
            foto: res?.foto,
          });

          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container-fluid d-flex justify-content-center items-center">
      <div className="d-flex flex-column cont">
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
          value={user.email}
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={user.password}
          onChange={handleInputChange}
        />
        <button onClick={handleClick} className="btn btn-warning">
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
};

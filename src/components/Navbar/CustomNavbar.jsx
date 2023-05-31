// eslint-disable-next-line no-unused-vars
import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const style = {
  fontWeight: "bold",
  color: "#f5cc16",
};

const ConditionalCSS = ({ isActive }) => {
  return isActive ? style : undefined;
};

export const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home"> Mail Empresa</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="nav-link" to={"/profile"} style={ConditionalCSS}>
            Profile
          </NavLink>
          <NavLink className="nav-link" to={"/"} style={ConditionalCSS}>
            My Mails
          </NavLink>
          <NavLink className="nav-link" to={"/send"} style={ConditionalCSS}>
            Send
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

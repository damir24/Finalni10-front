import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/w3.css";
import "../styles/style.css";
import Home from "../Home.js";
import About from "./About.js";
import Categories from "../Categories.js";
import Login from "../Login.js";
import Register from "../Register.js";
import { AuthContextProvider } from "../context/auth";

export default function Navigation() {
  return (
    <AuthContextProvider>
      <Router>
        <nav className="w3-bar w3-blue">
          <Link to="/" className="w3-bar-item w3-button">
            Početna Strana
          </Link>
          <Link to="/about" className="w3-bar-item w3-button">
            O nama
          </Link>
          <Link to="/categories" className="w3-bar-item w3-button">
            Kategorije
          </Link>
          <div>
            <Link to="register" className="w3-button">
              Registruj se
            </Link>
            <Link to="login" className="w3-button">
              Uloguj se
            </Link>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

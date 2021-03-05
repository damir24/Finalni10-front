import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "../styles/style.css";
import Home from "../Home.js";
import About from "../About.js";
import Categories from "../Categories.js";
import Login from "../Login.js";
import Register from "../Register.js";

export default function Navigation() {
    return (
        <Router>
            <nav className="container row">
                <Link to="/" className="col-sm">Početna Strana</Link>
                <Link to="/about" className="col-sm">O nama</Link>
                <Link to="/categories" className="col-sm">Kategorije</Link>
                <Link to="/login" className="col-sm">Uloguj se</Link>
                <Link to="register" className="col-sm">Registruj se</Link>
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
    );
}
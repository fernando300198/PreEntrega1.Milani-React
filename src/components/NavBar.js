import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Mi Tienda</Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/category/ropa">Ropa</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/electronica">Electrónica</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/accesorios">Accesorios</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
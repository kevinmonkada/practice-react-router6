import {Link, NavLink} from "react-router-dom";

export function Menu() {
  return (
    <>
      <h2>CRUD API con Rutas</h2>
      <nav className="menu">
        <NavLink
          to="/"
          className={({isActive}) => (isActive ? "active-link" : null)}>
          Santos
        </NavLink>
        <NavLink
          to="agregar"
          className={({isActive}) => (isActive ? "active-link" : null)}>
          Agregar
        </NavLink>
        <NavLink
          to="/about"
          className={({isActive}) => (isActive ? "active-link" : null)}>
          Acerca
        </NavLink>
        <Link to="/inexistente">Error 404</Link>
      </nav>
    </>
  );
}

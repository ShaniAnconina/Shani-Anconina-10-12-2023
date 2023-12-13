import { Link, NavLink } from "react-router-dom"

export function AppHeader() {
  return (
    <div className="app-header full">
      <div className="main-layout">
      <div className="header-container">
        <Link className="logo-container" to="/">
          <span className="logo">WeatherApp</span>
        </Link>
        <nav className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </div>
    </div>
    </div>
  );
}
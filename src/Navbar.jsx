import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TekSkill
        </Link>
        <div className="navbar-nav">
          <NavLink className="nav-link " aria-current="page" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/users">
            Users
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

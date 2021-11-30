import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <Link className="nav-link" to="/indumentaria">Indumentaria</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/calzado'>Calzado</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link"><CartWidget/></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
    );
  }
  
  export default NavBar;
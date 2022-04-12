import { Link } from 'react-router-dom';

export const Header = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
    <div className="container-fluid">
      <div className="d-flex">
        <Link to="/" className="navbar-brand">Les DevTools</Link>
        <div className="navbar-expand-sm">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/form" className="nav-link">Form</Link>
            </li>
            <li className="nav-item">
              <Link to="/flex" className="nav-link">Flex</Link>
            </li>
            <li className="nav-item">
              <Link to="/end" className="nav-link">End</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-white">
        <img src="/logo.png" alt="Devoxx France 2022" width={'200px'} className="me-3 bg-white" />
        <span>🐦 @romaintaz</span>
      </div>
    </div>
  </nav>
);

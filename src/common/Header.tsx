import { Link } from 'react-router-dom';

export const Header = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
    <div className="container-fluid">
      <div className="d-flex">
        <Link to="/" className="navbar-brand">Les DevTools</Link>
        <div className="navbar-expand-sm">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <Link to="/form" className="nav-link">Form</Link>
            </li> */}
            <span className="nav-item">
              <Link to="/form" className="nav-link"><i className="bi-sliders"/> Form</Link>
            </span>
            <li className="nav-item">
              <Link to="/flex" className="nav-link"><i className="bi-layout-wtf"/> Flex</Link>
            </li>
            <li className="nav-item">
              <Link to="/console" className="nav-link"><i className="bi-terminal"/> Console</Link>
            </li>
            <li className="nav-item">
              <Link to="/end" className="nav-link"><i className="bi-infinity"/> End</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-white">
        <img src="/logo.png" width={'200px'} className="me-3 bg-white" />
        <span><i className="bi-twitter"/> @romaintaz</span>
      </div>
    </div>
  </nav>
);

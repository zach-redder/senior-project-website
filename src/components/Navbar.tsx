import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Senior Project
        </Link>
        <ul className="nav-menu">
          <li>
            <Link 
              to="/vision" 
              className={`nav-link ${isActive('/vision') ? 'active' : ''}`}
            >
              Vision
            </Link>
          </li>
          <li>
            <Link 
              to="/team" 
              className={`nav-link ${isActive('/team') ? 'active' : ''}`}
            >
              Team
            </Link>
          </li>
          <li>
            <Link 
              to="/code" 
              className={`nav-link ${isActive('/code') ? 'active' : ''}`}
            >
              Code
            </Link>
          </li>
          <li>
            <Link 
              to="/report" 
              className={`nav-link ${isActive('/report') ? 'active' : ''}`}
            >
              Report
            </Link>
          </li>
          <li>
            <Link 
              to="/presentations" 
              className={`nav-link ${isActive('/presentations') ? 'active' : ''}`}
            >
              Presentations
            </Link>
          </li>
          <li>
            <Link 
              to="/resources" 
              className={`nav-link ${isActive('/resources') ? 'active' : ''}`}
            >
              Resources
            </Link>
          </li>
          <li>
            <a 
              href="https://computing.calvin.edu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link external"
            >
              CS Department
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


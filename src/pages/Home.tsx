import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="glass-card hero-card">
          <h1 className="hero-title">Senior Project</h1>
          <p className="hero-subtitle">Computer Science</p>
          <p className="hero-description">
            Welcome to our senior project showcase. Explore our vision, team, code, 
            and more!
          </p>
          <div className="hero-actions">
            <Link to="/vision" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      <div className="quick-links">
        <Link to="/vision" className="glass-card quick-link-card">
          <h3>Vision</h3>
          <p>Our project vision and goals</p>
        </Link>
        <Link to="/team" className="glass-card quick-link-card">
          <h3>Team</h3>
          <p>Meet our team members</p>
        </Link>
        <Link to="/code" className="glass-card quick-link-card">
          <h3>Code</h3>
          <p>Explore our codebase</p>
        </Link>
        <Link to="/report" className="glass-card quick-link-card">
          <h3>Report</h3>
          <p>View project documentation</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;


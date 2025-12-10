import './Page.css';
import zachImage from '../assets/zach.jpeg';
import lutherImage from '../assets/luther.jpeg';
import bradyImage from '../assets/brady.jpeg';

const Team = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Team</h1>
      </div>
      <div className="page-content">
        <div className="team-grid">
          <div className="glass-card team-member-card">
            <div className="team-member-image">
              <img src={zachImage} alt="Zach Redder" />
            </div>
            <h3>Zach Redder</h3>
            <p>
                Zach's role in the project was to oversee the project and ensure it was completed on time, while also helping with the development of both the frontend and backend.
            </p>
          </div>
          
          <div className="glass-card team-member-card">
            <div className="team-member-image">
              <img src={lutherImage} alt="Luther David" />
            </div>
            <h3>Luther David</h3>
            <p>
                Luther's role in the project was to manage the team and ensure the project was completed on time, while also helping with the development of the agentic AI pipeline.
            </p>
          </div>
          
          <div className="glass-card team-member-card">
            <div className="team-member-image">
              <img src={bradyImage} alt="Brady Swiech" />
            </div>
            <h3>Brady Swiech</h3>
            <p>
                Brady's role in the project was to focus on the development of the frontend and ensure it was functional and user-friendly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;


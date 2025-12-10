import './Page.css';

const Presentations = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Presentations</h1>
      </div>
      <div className="page-content">
        <div className="presentations-grid">
          <div className="glass-card presentation-card">
            <h3>Status Report Presentation</h3>
            <p>
              This 5 minute presentation was given to the CS department to update them on the progress of the project.
            </p>
            <div className="presentation-links">
              <a 
                href="https://docs.google.com/presentation/d/1RUgezwiipgLjgK_AMT65wIRguBrY2Rab9_AxeR8cRXo/edit?usp=sharing" 
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Slides
              </a>
              {/* <a 
                href="#" 
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF
              </a> */}
            </div>
          </div>
          
          <div className="glass-card presentation-card">
            <h3>Final Presentation</h3>
            <p>
              Coming soon...
            </p>
            <div className="presentation-links">
              {/* <a 
                href="#" 
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Slides
              </a>
              <a 
                href="#" 
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Video
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentations;


import './Page.css';

const Report = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Report</h1>
      </div>
      <div className="page-content">
        <div className="glass-card content-card">
          <h2>Final Report</h2>
          
          <div className="report-downloads">
            <a 
              href="src/assets/Senior_Project_Report.pdf"
              download="Senior_Project_Report.pdf"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF
            </a>
          </div>
        </div>
        
        {/* <div className="glass-card content-card">
          <h2>Report Sections</h2>
          <ul className="report-sections">
            <li>
              <p>Introduction</p>
            </li>
            <li>
              <p>Related Work</p>
            </li>
            <li>
              <p>Methodology</p>
            </li>
            <li>
              <p>Implementation</p>
            </li>
            <li>
              <p>Results</p>
            </li>
            <li>
              <p>Conclusion</p>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Report;


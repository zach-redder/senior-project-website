import './Page.css';

const Resources = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Resources</h1>
      </div>
      <div className="page-content">
        <div className="glass-card content-card">
          <h2>Useful Resources</h2>
          <p>
            A collection of helpful resources, tools, documentation, and materials 
            related to this project.
          </p>
          
          <div className="resources-section">
            <h3>Documentation & Guides</h3>
            <ul className="resources-list">
              <li>
                <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer">
                  FastAPI Documentation - Modern Python web framework for building APIs
                </a>
              </li>
              <li>
                <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
                  Next.js Documentation - React framework for production
                </a>
              </li>
              <li>
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                  React Documentation - JavaScript library for building user interfaces
                </a>
              </li>
              <li>
                <a href="https://supabase.com/docs" target="_blank" rel="noopener noreferrer">
                  Supabase Documentation - Open source Firebase alternative
                </a>
              </li>
              <li>
                <a href="https://docs.anthropic.com/" target="_blank" rel="noopener noreferrer">
                  Anthropic API Documentation - Claude AI API reference
                </a>
              </li>
              <li>
                <a href="https://ai.google.dev/docs" target="_blank" rel="noopener noreferrer">
                  Google Gemini API Documentation - Google's AI API documentation
                </a>
              </li>
            </ul>
          </div>

          <div className="resources-section">
            <h3>Tools & Libraries</h3>
            <ul className="resources-list">
              <li>
                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                  Python - Programming language used for the backend
                </a>
              </li>
              <li>
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                  TypeScript - Typed JavaScript for the frontend
                </a>
              </li>
              <li>
                <a href="https://stripe.com/docs" target="_blank" rel="noopener noreferrer">
                  Stripe API - Payment processing integration
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;


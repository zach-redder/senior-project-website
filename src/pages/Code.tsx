import './Page.css';

const Code = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Code</h1>
      </div>
      <div className="page-content">
        <div className="glass-card content-card">
          <h2>Codebase</h2>
          <p>
            The codebase for the project is housed on GitHub. The backend uses Python and FastAPI, and the frontend uses React. 
          </p>
          
          <div className="code-links">
            <a 
              href="https://github.com/zach-redder/scale66" 
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
          
          <div className="code-structure">
            <h3>Project Structure</h3>
            <pre className="code-block">
{`README.md
backend/
├── main.py                  # Entry point
├── pyproject.toml           # Dependencies (uv)
├── output/                  # Generated content
└── app/
    ├── agents/              # AI pipeline
    │   ├── base_agent.py
    │   ├── orchestrator.py
    │   ├── story_generator.py
    │   ├── text_generator.py
    │   ├── image_generator.py
    │   ├── carousel_format_decider.py
    │   └── finalizer.py
    │
    ├── api/v1/              # REST endpoints
    │   ├── brand_kit.py
    │   ├── campaigns.py
    │   ├── content.py
    │   ├── posts.py
    │   └── ...
    │
    ├── core/                # App setup
    │   ├── config.py
    │   ├── logging.py
    │   ├── security.py
    │   └── supabase.py
    │
    ├── crud/                # Database ops
    │   ├── base.py
    │   ├── brand_kit.py
    │   ├── campaign.py
    │   └── ...
    │
    ├── models/              # Pydantic schemas
    │   ├── pipeline.py
    │   ├── brand_kit.py
    │   └── ...
    │
    ├── services/            # Business logic
    │   ├── ai/
    │   │   ├── anthropic_service.py
    │   │   └── gemini_service.py
    │   ├── storage_service.py
    │   ├── stripe_service.py
    │   └── ...
    │
    └── utils/
frontend/
├── package.json
├── next.config.ts
└── src/
    ├── app/                        # Next.js App Router
    │   ├── (landing)/              # Marketing pages
    │   │   ├── page.tsx
    │   │   ├── blog/
    │   │   ├── support/
    │   │   └── waitlist/
    │   │
    │   ├── (auth)/                 # Auth pages
    │   │   ├── login/
    │   │   └── signup/
    │   │
    │   └── (app)/                  # Authenticated app
    │       ├── dashboard/
    │       ├── brand-kit/
    │       ├── campaigns/
    │       ├── canvas/[id]/
    │       └── settings/
    │
    ├── components/
    │   ├── ui/                     # Base components
    │   │   ├── Button/
    │   │   ├── Input/
    │   │   ├── Modal/
    │   │   └── ...
    │   ├── common/                 # Shared business components
    │   └── layouts/                # Page layouts
    │
    ├── features/                   # Feature modules
    │   ├── auth/
    │   │   ├── components/
    │   │   ├── hooks/
    │   │   ├── services/
    │   │   ├── types/
    │   │   └── index.ts
    │   ├── brand-kit/
    │   ├── campaigns/
    │   ├── canvas/
    │   ├── dashboard/
    │   ├── onboarding/
    │   ├── payment/
    │   ├── posting/
    │   ├── settings/
    │   └── landing/                # Landing features
    │
    ├── context/                    # React Context
    │   ├── AuthContext.tsx
    │   ├── BrandContext.tsx
    │   └── ThemeContext.tsx
    │
    ├── hooks/                      # Shared hooks
    │   ├── useAuth.ts
    │   ├── useDebounce.ts
    │   └── ...
    │
    ├── services/api/               # API client
    │   ├── client.ts
    │   └── interceptors.ts
    │
    ├── lib/                        # Third-party configs
    │   ├── supabase.ts
    │   └── stripe.ts
    │
    ├── types/                      # TypeScript types
    │   ├── api.types.ts
    │   ├── brand.types.ts
    │   └── ...
    │
    ├── data/                       # Static data
    ├── utils/                      # Utility functions
    ├── styles/                     # Global styles
    └── middleware.ts               # Auth/routing`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;


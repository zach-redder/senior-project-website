import './Page.css';

const Vision = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Vision</h1>
      </div>
      <div className="page-content">
        <div className="glass-card content-card">
          <h2>Vision Statement</h2>
          <p>
            Small business owners and solopreneurs are constantly told they need an active social
            media presence, but most lack the time or marketing expertise to do it well. Scale66 is an
            AI-powered tool that helps them create professional, platform-optimized social media content
            without any marketing background. We're democratizing social media marketing so small
            businesses can compete online while focusing on running their business.
          </p>
        </div>
        
        <div className="glass-card content-card">
          <h2>Project Summary</h2>
          <p>
            Scale66 is a platform that uses AI to generate social media content for small businesses.
            It is a web application that allows users to input their business information and preferences,
            and then generates social media posts for them. The posts are then posted to the user's social
            media platforms.
          </p>
          <p>
            The platform is built using a modern tech stack with a Python/FastAPI backend and a Next.js 
            frontend. At its core, Scale66 employs an agentic AI pipeline that orchestrates multiple 
            specialized agents to create comprehensive social media content. The system includes agents for 
            story generation, text creation, image generation, and content formatting decisions, all working 
            together to produce platform-optimized posts. The backend integrates with AI services from 
            Anthropic and Google Gemini, while using Supabase for data management and Stripe for payment 
            processing. The frontend provides an intuitive interface for brand kit management, campaign 
            creation, and a canvas-based content editor, enabling users to customize and refine AI-generated 
            content before publishing.
          </p>
          <p>
            Scale66 addresses a critical gap in the market by making professional social media marketing 
            accessible to small businesses that lack the resources for dedicated marketing teams. The 
            platform's ability to generate both text and visual content, adapt to different social media 
            platform requirements, and maintain brand consistency through customizable brand kits represents 
            a significant advancement in automated content creation. By leveraging agentic AI architecture, 
            the system can handle complex content generation workflows that would typically require human 
            expertise, potentially transforming how small businesses approach digital marketing and enabling 
            them to compete more effectively in the online marketplace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;


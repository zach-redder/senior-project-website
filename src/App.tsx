import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Vision from './pages/Vision';
import Team from './pages/Team';
import Code from './pages/Code';
import Report from './pages/Report';
import Presentations from './pages/Presentations';
import Resources from './pages/Resources';
import './App.css';

function App() {
  return (
    <Router basename="/senior-project-website">
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/team" element={<Team />} />
            <Route path="/code" element={<Code />} />
            <Route path="/report" element={<Report />} />
            <Route path="/presentations" element={<Presentations />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;


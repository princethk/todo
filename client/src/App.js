import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import ProjectView from './components/ProjectView';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define a valid element for the root route */}
        <Route path="/" element={<Login />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/:id" element={<ProjectView />} />
      </Routes>
    </Router>
  );
}

export default App;

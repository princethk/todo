import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects', {
      headers: { Authorization: localStorage.getItem('token') },
    }).then(response => {
      setProjects(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <a href={`/projects/${project._id}`}>{project.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;

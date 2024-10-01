import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProjectView({ match }) {
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios.get(`/api/projects/${match.params.id}`, {
      headers: { Authorization: localStorage.getItem('token') },
    }).then(response => {
      setProject(response.data);
    });
  }, [match.params.id]);

  return (
    <div>
      {project ? (
        <>
          <h1>{project.title}</h1>
          <ul>
            {project.todos.map((todo) => (
              <li key={todo._id}>{todo.description}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProjectView;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Portfolio() {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    getProjects()
  }, [])
  const getWork = async () => {
    try {
      const response = await axios.get(
        'https://api.github.com/users/qspencer0224/repos'
      )
      const firstTenProjects = response.data.slice(0, 10);
      setProjects(firstTenProjects);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <a href={project.html_url}>{project.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio
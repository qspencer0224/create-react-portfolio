import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav_UI from '../components/Nav_UI';

function Portfolio() {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    getWork()
  }, [])
  const getWork = async () => {
    try {
      const response = await axios.get(
        'https://api.github.com/users/qspencer0224/repos'
      )
      const firstTen = response.data.slice(0, 10);
      setProjects(firstTen);
    } catch (error) {
      console.error('Error!', error);
    }
  };
  return (
    <div>
      <Nav_UI/>
      <div className="title" id='art'>GOD IS SOMEWHERE IN THE ART</div>
      <div className="portfolio">portfolio/the manifestations</div>
      <ul>
        {projects.map((project) => (
          <ul key={project.id}>
            <a id='projectbox' href={project.html_url}>{project.name}</a>
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio
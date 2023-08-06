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
      <div className="title" id='art'>Portfolio/The Manifestations</div>
      <ul>
        {projects.map((project) => (
          <ul key={project.id}>
            <a id='projectbox' href={project.html_url}>{project.name}</a>
          </ul>
        ))}
      </ul>
      <div className="bottombox">
          <div className="bottomtext">GOD IS SOMEWHERE IN THE CHAOS</div>
          <div className="bottomlogo">
            <img src='https://cdn-icons-png.flaticon.com/512/4257/4257487.png' alt='' id='bottomlogo' />
          </div>
        </div>
    </div>
  );
}

export default Portfolio
import React, { useEffect, useState } from 'react';
import Singelproject from './SingelPorject/Singelproject';

const Projects = () => {

    const [projects, setProjects] = useState([])

    useEffect(()=>{
        fetch('projects.json')
         .then(res => res.json())
         .then(data => setProjects(data))
    },[])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2'>
            {
                projects.map(project => <Singelproject data={project} key={project.index}></Singelproject>)
            }
        </div>
    );
};

export default Projects;
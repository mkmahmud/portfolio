import React, { useEffect, useState } from 'react';
import DetailsButton from '../../Componentes/Button/DetailsButton';
import ViewAllButton from '../../Componentes/Button/ViewAllButton';
import Singelproject from './SingelPorject/Singelproject';
import SingelProjectFullWidth from './SingelProjectFullWidth/SingelProjectFullWidth';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    
  

    useEffect(() => {
        fetch('https://port-server-mkmahmud.vercel.app/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
        
    }, [])
    

    return (
        <div className='projects'>
            <div>
                <h2 className='text-[50px] font-bold py-20 sectionTitle'>Projects</h2>
                {
                    projects.map(project => <SingelProjectFullWidth data={project} key={project._id}></SingelProjectFullWidth>)
                }
                
            </div>
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-2'>
                {
                    projects.map(project => <Singelproject data={project} key={project.index}></Singelproject>)
                }
            </div> */}
            <div className="viewAll my-10">
                <ViewAllButton path='/projects' content='View All'></ViewAllButton>
            </div>




        </div>
    );
};

export default Projects;
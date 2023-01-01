import React, { useEffect, useState } from 'react';
import SingelProjectFullWidth from '../Projects/SingelProjectFullWidth/SingelProjectFullWidth';

const AllProjects = () => {


    const [projects, setProjects] = useState([]);
    
  

    useEffect(() => {
        fetch('https://port-server-mkmahmud.vercel.app/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
        
    }, [])

    return (
        <div className='px-10 py-20'>
            <h2 className='text-[80px] font-bold py-20 sectionTitle'>Projects</h2>
            <div className='text-left'>
                {
                    projects.map(project => <SingelProjectFullWidth data={project} key={project._id}></SingelProjectFullWidth>)
                }
            </div>
        </div>
    );
};

export default AllProjects;
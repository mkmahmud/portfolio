import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';

const Details = (data) => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('myprojects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])



    const myimages = [];



    projects[0]?.images?.map((image) => (
        myimages.push({
            original: image,
            thumbnail: image
        })
    ))



    return (
        <div className='p-5'>

            <div className="detailsHead flex jsutify-between text-left w-full">
                <ImageGallery items={myimages} className='w-1/2 p-5' />
                <div className='w-1/2 p-5'>
                    <h2 className='text-4xl font-bold text-left'>{projects[0]?.title}</h2>
                    <p className='py-2'>{projects[0]?.shortDes}</p>
                    <p className='py-2'>{projects[0]?.longDes}</p>
                    <h2 className='py-2'><strong>Stack:</strong> <span>{projects[0]?.stack}</span></h2>
                    <h2 className='py-2'> <strong>Technologies:</strong></h2>
                    <h2 className='py-2'><strong>Front End:</strong> {projects[0]?.technology?.frontEnd?.map(tech => <span className='px-2'> {tech}, etc </span>)}</h2>
                    <h2 className='py-2'><strong>Back end</strong>: {projects[0]?.technology?.backend?.map(tech => <span className='px-2'> {tech}, etc </span>)}</h2>
                </div>
            </div>
            <div className='text-left py-10'>
                
                <h2 className='text-2xl'><strong>Chalanges:</strong></h2>
            </div>

        </div>
    );
};

export default Details;
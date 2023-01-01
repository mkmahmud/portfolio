import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserProfile } from './params';
import ImageGallery from 'react-image-gallery';

const Details = () => {

    const [details, setDetails] = useState({})

    const params = useParams()


    useEffect(() => {
        fetch(`https://port-server-mkmahmud.vercel.app/details/${params?.index}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])



    const myimages = [
       
    ];

    useEffect(() => {
        details?.images?.map((image) => {
            myimages.push({
                original: image,
                thumbnail: image,
            })
        })
    }, [details.images])

    

    return (
        <div className=' text-left'>
            <div className='p-5'>
                <h2 className='text-4xl py-10 font-bold text-left text-[#FF5F00]'>Summary</h2>
                <div className="DetailsHeader flex w-full">
                    <div className="left text-left w-1/2">

                        <h2 className='text-2xl font-bold'>{details.title}</h2>
                        <h3 className='py-4'>{details.shortDes}</h3>
                        <h3 className='py-4'>{details.longDes}</h3>
                    </div>
                    <div className="right w-1/2">
                        <ImageGallery  lazyLoad={true} items={myimages} />
                    </div> 
                </div>
            </div>
            <div className="DetailsBody p-5 bg-black my-4">
                <h2 className='text-4xl py-10 font-bold text-left text-[#FF5F00]'>Technology Stack</h2>
                <p>In this project I used <strong>MERN</strong> stack.</p>
                <h2 className='p-4'><strong className='text-[#FF5F00]'>Front End:</strong></h2>
                <ul className='flex ml-20'>
                    {
                        details?.technology?.frontEnd?.map(tech => <li className='px-2'>{tech},</li>,)
                    }
                    <li>etc</li>
                </ul>
                <h2 className='p-4'><strong className='text-[#FF5F00]'>Back End:</strong></h2>
                <ul className='flex ml-20'>
                    {
                        details?.technology?.backend?.map(tech => <li className='px-2'>{tech},</li>,)
                    }
                    <li>etc</li>
                </ul>
            </div>
            <div className="fetures p-5">
                <h2 className='text-4xl py-10 font-bold text-left text-[#FF5F00]'>Features</h2>
                <ol className='list-decimal ml-20'>
                    <li>  User Authentication with JWT tocken</li>
                </ol>
            </div>
            <div className="links p-5 md:flex justify-around ">
                <div className='bg-[#B20600] w-1/2 p-5 text-center' >
                    <a href="" className='text-lg'>Live Site</a>
                </div>
                <div className='bg-[#FF5F00] w-1/2 p-5 text-center'>
                    <a href={details?.livecode} target='_blank' className='text-lg'>Live Code</a>
                </div>
            </div>
        </div>
    );
};

export default Details;
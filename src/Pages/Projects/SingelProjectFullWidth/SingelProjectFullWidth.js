import React from 'react';
import { Link } from 'react-router-dom';
import banarImage from '../../../Assetes/projects/1.png'
import DetailsButton from '../../../Componentes/Button/DetailsButton';
import Details from '../Details/Details';
import './SingelProjectFullWidth.css'

const SingelProjectFullWidth = ({data}) => {

    const {title, shortDes, stack, images} = data;
  

    return (
        <div className='m-20'>

            <div class="projects-card flex flex-col items-center ease-in-out  border rounded-lg shadow-md md:flex-row rounded-xl  text-left">
                <div class="flex flex-col justify-between p-4 leading-normal md:w-3/5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white ">{title}</h5>
                    <p class="mb-3 font-normal text-white">{shortDes}</p>
                    <h3 className='text-xl py-5'>Tech Stack: <strong className='text-[#FF5F00]'> {stack}</strong></h3>
                    <div class="flex items-center justify-between md:w-1/2">
                        <DetailsButton content='Details' path='/details' background='B20600'></DetailsButton>
                        <DetailsButton content='Live Site' path='mk' background='FF5F00'></DetailsButton>
                    </div>
                </div>
                <img  class="roject-image projects-img p-2 object-cover w-[500px] rounded-t-lg h-[300px] text-right md:w-2/5  md:rounded-none md:rounded-lg" src={images[0]} alt="" />
            </div>

        </div>
    );
};

export default SingelProjectFullWidth;
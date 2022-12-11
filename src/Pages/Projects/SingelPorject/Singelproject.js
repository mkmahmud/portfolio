import React from 'react';
import DetailsButton from '../../../Componentes/Button/DetailsButton';

const Singelproject = ({data}) => {
    const {image, title, Tech, livesite} = data;
    return (

        <div class="w-full max-w-lg bg-[#030f3e] rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 my-10 mx-auto text-white">
            <a href="#">
                <img class=" rounded-t-lg h-80" src={image}  alt="product image" />
            </a>
            <div class="px-5 py-5 text-left">
                <a href="#">
                    <h5 class="text-2xl font-bold tracking-tight text-white dark:text-white">{title}</h5>
                </a>
                <div class="flex items-center mt-2.5 mb-5">
                    
                    <span class="text-xl font-bold text-[#EEEEEE] dark:text-white"><span className='text-[#FF5F00]'>Stack:</span> {Tech}</span>
                     </div>
                <div class="flex items-center justify-between">
                    <DetailsButton content='Details' path='mk.com' background='B20600'></DetailsButton>
                    <DetailsButton content='Live Site' path={livesite} background='FF5F00'></DetailsButton>
                 </div>
            </div>
        </div>

    );
};

export default Singelproject;
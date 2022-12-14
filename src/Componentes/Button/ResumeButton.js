import React from 'react';

const ResumeButton = ({content, resume}) => {
    return (
        <a href={resume} download class="relative px-5 py-2 font-medium text-white group">
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#B20600] group-hover:bg-[#FF5F00] group-hover:skew-x-12"></span>
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#FF5F00] group-hover:bg-[#B20600] group-hover:-skew-x-12"></span>
            <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
            <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
            <span class="relative">{content}</span>
        </a>
    );
};

export default ResumeButton;
import React from 'react';
import tail from '../../Assetes/tail.png'
import Skill from './Skill/Skill';

const Skills = () => {
    return (
        <div id='skills' className='bg-black'>
            <div>
                <h2 className='text-[50px] font-bold py-20 sectionTitle'>Skills</h2>
                
                <h2>I have a vast experience in the following web technologies:</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 place-items-center px-5 pb-20 '>
                {/* <Skill text={'HTML'} bg={'dd4b25'} parcent={80} ></Skill>
                <Skill text={'CSS'} bg={'254bdd'} parcent={75} ></Skill> */}
                <Skill text={'JavaScript'} bg={'efd81c'} parcent={70} ></Skill>
                {/* <Skill text={'PHP'} bg={'7377ad'} parcent={70} ></Skill> */}
                <Skill text={'React'} bg={'5ed3f3'} parcent={80} ></Skill>
                <Skill text={'Node'} bg={'6da45f'} parcent={50} ></Skill>
                <Skill text={'Express'} bg={'FFFFFF'} parcent={60} ></Skill>
                {/* <Skill text={'Laravel'} bg={'f72c1f'} parcent={70} ></Skill>
                <Skill text={'Bootstrap'} bg={'8011f5'} parcent={90} ></Skill>
                <Skill text={'Tailwind'} bg={'07b6d5'} parcent={85} ></Skill>
                <Skill text={'MongoDB'} bg={'00fe69'} parcent={90} ></Skill>
                <Skill text={'Firebase'} bg={'f2930d'} parcent={50} ></Skill> */}
            </div>
            {/* <div>
                <div className="languages py-5 block md:flex items-center justify-center">
                    <button className='p-5 border-l-4   border-t-4 border-b-4 m-5 border-[#dd4b25] text-[#dd4b25]'>
                        <i class="fa-brands fa-html5 text-9xl"></i>
                        <p className='text-xl'>HTML</p>
                    </button>
                    <button className='p-5 border-b-4 border-t-4 m-5 border-[#254bdd] text-[#254bdd]'>
                        <i class="fa-brands fa-css3-alt text-9xl"></i>
                        <p className='text-xl'>CSS</p>
                    </button>
                    <button className='p-5 border-b-4  border-t-4 m-5 border-[#efd81c] text-[#efd81c]'>
                        <i class="fa-brands fa-js text-9xl"></i>
                        <p className='text-xl'>JavaScript</p>
                    </button>
                    <button className='p-5 border-r-4  border-t-4 border-b-4  m-5 border-[#7377ad] text-[#7377ad]'>
                        <i class="fa-brands fa-php text-9xl"></i>
                        <p className='text-xl'>PHP</p>
                    </button>
                </div>
                <div className="languages py-5 block md:flex  items-center justify-center">
                    <button className='p-5 border-l-4   border-t-4 border-b-4 m-5 border-[#5ed3f3] text-[#5ed3f3]'>
                        <i class="fa-brands fa-react text-9xl"></i>
                        <p className='text-xl'>React</p>
                    </button>
                    <button className='p-5 border-b-4 border-t-4 m-5 border-[#f72c1f] text-[#f72c1f]'>
                        <i class="fa-brands fa-laravel text-9xl"></i>
                        <p className='text-xl'>Laravel</p>
                    </button>
                    <button className='p-5 border-b-4  border-t-4 m-5 border-[#8011f5] text-[#8011f5]'>
                        <i class="fa-brands fa-bootstrap text-9xl"></i>
                        <p className='text-xl'>Bootstrap</p>
                    </button>
                    <button className='p-5 border-r-4  border-t-4 border-b-4  m-5 border-[#07b6d5] text-[#07b6d5]'>
                        <img src={tail} className='h-[128px]' alt="" />
                        <p className='text-xl'>Tailwind</p>
                    </button>
                </div>

            </div> */}
            
        </div>
    );
};

export default Skills;
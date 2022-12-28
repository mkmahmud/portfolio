import React from 'react';
import { Navbar } from 'flowbite-react';
import logo from '../../../Assetes/logo.png'
import { Link } from 'react-router-dom';
import ResumeButton from '../../../Componentes/Button/ResumeButton';

const NavBar = () => {
    return (

        <nav class="bg-[#00092C] border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://mkmahmud.com/" class="flex items-center">
                    <img src={logo} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <span style={{ marginLeft: '-20px' }} class="self-center text-white text-xl font-semibold whitespace-nowrap dark:text-white">Mkmahmud</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block md:w-auto " id="navbar-default">
                    <ul class="flex flex-col items-center p-4 mt-4 border border-[#000000] rounded-lg bg-[#00092C] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#00092C] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to='/#skills' class="block py-2 pl-3 pr-4 text-white bg-[#00092C] rounded md:bg-transparent md:text-white md:p-0 dark:text-white" aria-current="page">Skills</Link>
                        </li>
                        <li>
                            <Link href="#" class="block py-2 pl-3 pr-4 text-white bg-[#00092C] rounded md:bg-transparent md:text-white md:p-0 dark:text-white" aria-current="page">Projects</Link>
                        </li>
                        <li>
                            <Link href="#" class="block py-2 pl-3 pr-4 text-white bg-[#00092C] rounded md:bg-transparent md:text-white md:p-0 dark:text-white" aria-current="page">Contact me</Link>
                        </li>
                        <li>
                            <ResumeButton content='Hire Me'></ResumeButton>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default NavBar;
import React from 'react';
import logoImg from '../assets/logo.png'
import { NavLink } from 'react-router';
import { Github } from 'lucide-react';
const NavBar = () => {
    const activeStyle = "text-violet-600 font-semibold border-b-2 border-violet-600 pb-1";
    const normalStyle = "text-gray-700 hover:text-violet-600 transition";

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink to='/' className={({ isActive }) => (isActive ? activeStyle : normalStyle)}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/apps' className={({ isActive }) => (isActive ? activeStyle : normalStyle)}>Apps</NavLink>
                            </li>
                            <li>
                                <NavLink to='/installation' className={({ isActive }) => (isActive ? activeStyle : normalStyle)}>Installation</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center'>
                        <img className="h-[30px] w-[30px]" src={logoImg} alt="" />
                        <p className='font-semibold'>
                            Hero.io
                        </p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-3">
                        <li>
                            <NavLink to='/' className={({ isActive }) => (isActive ? activeStyle : normalStyle)}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/apps' className={({ isActive }) => (isActive ? activeStyle : normalStyle)}>Apps</NavLink>
                        </li>
                        <li>
                            <NavLink to='/installation' className={({ isActive }) => (isActive ? activeStyle : normalStyle)}>Installation</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to={'https://github.com/saiem1209'} className='btn text-white bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)]'>
                        <Github />    Contribute</NavLink>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
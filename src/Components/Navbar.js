import React from 'react';

const Navbar = () => {
    return (

        <div class="navbar lg:text-black sm:text-black ">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact font-bold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a href="/#banner">Home</a>
                        </li>
                        <li>
                            <a href="/#aboutMe">About</a>
                        </li>
                        <li>
                            <a href="/#skills">Skills</a>
                        </li>
                        <li>
                            <a href="/#education">Education</a>
                        </li>
                        <li>
                            <a href="/#blogs">Blogs</a>
                        </li>
                        <li>
                            <a href="/#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <h1 class="btn btn-ghost normal-case text-xl font-bold">Zobaida Shekh Eshita</h1>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0 font-bold">
                    <li>
                        <a href="/#banner">Home</a>
                    </li>
                    <li>
                        <a href="/#aboutMe">About</a>
                    </li>
                    <li>
                        <a href="/#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                    <li>
                        <a href="#blogs">Blogs</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default Navbar;
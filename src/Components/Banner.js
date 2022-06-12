import React from 'react';
import linkedin from '../Image/linkedin.png';
import GitHub from '../Image/GitHub.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-[url(https://image.shutterstock.com/image-vector/young-woman-writes-code-on-260nw-1731157933.jpg)]">
            <div class="hero-overlay bg-opacity-70"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-3xl font-bold">Hello I'm</h1>
                    <h1 class="mb-5 text-4xl font-bold">Zobaida Shekh Eshita</h1>
                    <h1 class="mb-5 text-2xl font-bold">Front End Developer</h1>
                    <div className="mx-auto text-center mb-8">
                        <ul className="flex justify-center gap-5">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/zobaida-shekh-eshita/"
                                    target="_blank"
                                >
                                    <img
                                        className="w-8 md:w-10 invert"
                                        src={linkedin}
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Eshita95?tab=repositories" target="_blank">
                                    <img className="w-8 md:w-10 invert" src={GitHub} alt="" />
                                </a>
                            </li>

                        </ul>
                    </div>
                    <a
                     href="https://drive.google.com/file/d/1hDc4TIEKD6DvoGkwUopX9cffDZkgah0b/view?usp=sharing=download" className='text-white font-bold text-lg btn hover:bg-green-800 bg-green-900 border-0'
                    >
                        Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
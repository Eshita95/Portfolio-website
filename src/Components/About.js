import React from 'react';
import Eshita from '../Image/Eshita.jpg'

const About = () => {
    return (
        <div className='w-full bg-emerald-200 bg-opacity-25 '>
            <div className='container mx-auto md:py-10'>
                <div class="hero min-h-screen">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={Eshita} alt='' class="max-w-sm rounded-full shadow-2xl" />
                        <div className='mx-20'>
                            <h1 class="text-5xl font-bold">About Me</h1>
                            <p class="py-6">I am a web developer with a strong interest in software engineering and technology. I spend most of my free time coding, testing out new technologies and writing code. In addition to that, I have experience in working with team as I was an IT personnel for two reputed organization for three years. In addition, I am very interested in developing web apps and having projects using Git.</p>
                            <div>
                                <a href="https://drive.google.com/file/d/1hDc4TIEKD6DvoGkwUopX9cffDZkgah0b/view?usp=sharing=download" className='text-white font-bold text-lg btn hover:bg-green-800 bg-green-900 border-0'>Download Resume</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
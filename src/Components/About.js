import React from 'react';
import Eshita from '../Image/Eshita.jpg'

const About = () => {

    return (
        <div className='w-full bg-green-100 bg-opacity-25 '>
            <div className='container mx-auto md:py-10'>
                <div class="hero min-h-screen">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={Eshita} alt='' class="max-w-sm rounded-full shadow-2xl" />
                        <div className='mx-20'>
                            <h1 class="text-5xl text-green-900 font-bold">About Me</h1>
                            <p class="py-6">I am a positive, enthusiastic and competent Web Developer. I have extensive experience working both alone and as part of a team on often time-sensitive, challenging web development projects that require outstanding creative and technical capabilities and the ability to ensure all work is optimized across a wide range of platforms. I take my work as a Web Developer seriously and this means I always ensure my skills are kept up to date within this rapidly changing industry. If you hire me as your Web Developer, I assure you I will fit into your team quickly, I will always put the commercial needs of your business at the forefront of everything I do, and the work I carry out will be consistent to a first-class standard.</p>
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
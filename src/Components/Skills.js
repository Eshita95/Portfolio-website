import React from 'react';
import html from '../Image/logo/html.png'
import css from '../Image/logo/css.png'
import Javascript from '../Image/logo/Javascript.png'
import Tailwind from '../Image/logo/Tailwind.png'
import Bootstrap from '../Image/logo/Bootstrap.png'
import react from '../Image/logo/react.png'
import node from '../Image/logo/node.png'
import mongodb from '../Image/logo/mongodb.png'
import firebase from '../Image/logo/firebase.png'
import figma from '../Image/logo/figma.png'
import netlify from '../Image/logo/netlify.png'
import heroku from '../Image/logo/heroku.png'
import github from '../Image/logo/github.png'
import vscode from '../Image/logo/vscode.png'

const Skills = () => {
    return (
        <div className="bg-opacity-10 py-4 bg-green-100">
            <div className="container px-3 lg:px-0 mx-auto">
                <h1 className="text-center font-bold text-green-900 text-4xl lg:text-5xl">
                    My Skills
                </h1>
                <div className="flex justify-center">
                    <span className="inline-block h-1 w-20 rounded-3xl bg-green-900 mt-6 mb-4"></span>
                </div>
                <section className="text-gray-600 pt-8 body-font">
                    <div className="container px-5 mx-auto">
                        <div className="flex flex-wrap">
                            <div className="p-4 lg:w-1/5 sm:w-1/2 w-full">
                                <h2 className="font-normal title-font tracking-widest text-gray-900 mb-4 mt-3 md:mt-0 text-2xl text-center sm:text-left">
                                    Language
                                </h2>
                                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                                                            
                                    <div
                                        className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                                        }}
                                    >
                                        <div className="avatar">
                                            <div className="w-14">
                                                <img src={Javascript} alt=''/>
                                            </div>
                                        </div>
                                        <span className="text-lg font-light">JavaScript</span>
                                    </div>
                                </nav>
                            </div>
                            <div className="p-4 lg:w-1/5 sm:w-1/2 w-full">
                                <h2 className="font-normal title-font tracking-widest text-gray-900 mb-4 mt-3 md:mt-0 text-2xl text-center sm:text-left">
                                    Frontend
                                </h2>
                                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                                    <div
                                        className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                                        }}
                                    >
                                        <div className="avatar">
                                            <div className="w-14">
                                                <img src={react} alt='' />
                                            </div>
                                        </div>
                                        <span className="text-lg font-light">React</span>
                                    </div>
                                    <div
                                        className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                                        }}
                                    >
                                        <div className="avatar">
                                            <div className="w-14">
                                                <img src={html} alt='' />
                                            </div>
                                        </div>
                                        <span className="text-lg font-light">HTML5</span>
                                    </div>
                                    <div
                                        className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                                        }}
                                    >
                                        <div className="avatar">
                                            <div className="w-14">
                                                <img src={css} alt='' />
                                            </div>
                                        </div>
                                        <span className="text-lg font-light">CSS3</span>
                                    </div>
                                    <div
                                        className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                                        }}
                                    >
                                        <div className="avatar">
                                            <div className="w-14">
                                                <img src={Bootstrap} alt='' />
                                            </div>
                                        </div>
                                        <span className="text-lg font-light">Bootstrap 5</span>
                                    </div>
                                    <div
                                        className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                                        }}
                                    >
                                        <div className="avatar">
                                            <div className="w-14">
                                                <img src={Tailwind} alt='' />
                                            </div>
                                        </div>
                                        <span className="text-lg font-light">Tailwind CSS</span>
                                    </div>
                                </nav>
                            </div>
                            <div className="p-4 lg:w-1/5 sm:w-1/2 w-full">
                                <h2 className="font-normal title-font tracking-widest text-gray-900 mb-4 mt-3 md:mt-0 text-2xl text-center sm:text-left">
                                    Backend
                                </h2>
                                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                                    <div
                                        className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                                        }}
                                    >
                                        <div className="avatar">
                                            <div className="w-14">
                                                <img src={mongodb} alt='' />
                                            </div>
                                        </div>
                                        <span className="text-lg font-light">MongoDB</span>
                                    </div>
                                    <div
                                        className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                                        }}
                                    >
                                        <div className="avatar">
                                            <div className="w-14">
                                                <img src={node} alt='' />
                                            </div>
                                        </div>
                                        <span className="text-lg font-light">Node.js</span>
                                    </div>
                                </nav>
                            </div>
                            <div className="p-4 lg:w-1/5 sm:w-1/2 w-full">
                                <h2 className="font-normal title-font tracking-widest text-gray-900 mb-4 mt-3 md:mt-0 text-2xl text-center sm:text-left">
                                    Platform
                                </h2>
                                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                                    <div
                                        className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                                        }}
                                    >
                                        <div className="avatar">
                                            <div className="w-14">
                                                <img src={firebase} alt=''/>
                                            </div>
                                        </div>
                                        <span className="text-lg font-light">Firebase</span>
                                    </div>
                                    
                                    <div
                                        className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                                        }}
                                    >
                                        <div className="avatar">
                                            <div className="w-14">
                                                <img src={github} />
                                            </div>
                                        </div>
                                        <span className="text-lg font-light">GitHub</span>
                                    </div>
                                    <div
                                        className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                                        }}
                                    >
                                        <div className="avatar">
                                            <div className="w-14">
                                                <img src={heroku} />
                                            </div>
                                        </div>
                                        <span className="text-lg font-light">Heroku</span>
                                    </div>

                                    <div
                                        className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                                        }}
                                    >
                                        <div className="avatar">
                                            <div className="w-14">
                                                <img src={netlify} />
                                            </div>
                                        </div>
                                        <span className="text-lg font-light">Netlify</span>
                                    </div>
                                </nav>
                            </div>
                            <div className="p-4 lg:w-1/5 sm:w-1/2 w-full">
                                <h2 className="font-normal title-font tracking-widest text-gray-900 mb-4 mt-3 md:mt-0 text-2xl text-center sm:text-left">
                                    Tools
                                </h2>
                                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                                    <div
                                        className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                                        }}
                                    >
                                        <div className="avatar">
                                            <div className="w-14">
                                                <img src={vscode} />
                                            </div>
                                        </div>
                                        <span className="text-lg font-light">
                                            Visual Studio Code
                                        </span>
                                    </div>

                                    <div
                                        className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                                        }}
                                    >
                                        <div className="avatar">
                                            <div className="w-14">
                                                <img src={figma} alt=''/>
                                            </div>
                                        </div>
                                        <span className="text-lg font-light">Figma</span>
                                    </div>
                                    
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Skills;
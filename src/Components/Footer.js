import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {   
//     faGithub,
//     faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div>
            <footer class="bg-emerald-200 bg-opacity-25 body-font">
                <div className="container mx-auto px-5 py-4">
                    <div className="flex flex-col md:flex-row justify-center py-5 text-center gap-2 md:gap-8">
                        <div className="col">
                            <a className="font-medium" href="#navbar-section">
                                Home
                            </a>
                        </div>
                        <div className="col">
                            <a className="font-medium" href="#aboutMe">
                                About
                            </a>
                        </div>
                        <div className="col">
                            <a className="font-medium" href="#skills">
                                Skills
                            </a>
                        </div>
                        <div className="col">
                            <a className="font-medium" href="#education">
                                Education
                            </a>
                        </div>
                        <div className="col">
                            <a className="font-medium" href="#projects">
                                Projects
                            </a>
                        </div>
                        <div className="col">
                            <a className="font-medium" href="#blogs">
                                Blogs
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center text-center mt-3 mb-2 gap-8">

                        <div className="col">
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/zobaida-shekh-eshita/"
                            >
                                
                            </a>
                        </div>
                        
                        <div className="col">
                            <a target="_blank" href="https://github.com/Eshita95">
                                
                            </a>
                        </div>
                    </div>
                    <div className="text-center pb-3">
                        <p className="">
                           <small> All rights reserved by Zobaida Shekh Eshita &copy; </small>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
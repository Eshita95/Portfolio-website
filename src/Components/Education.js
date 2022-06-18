import React from "react";
import college from '../Image/college.jpeg'

const Education = () => {
    return (
        <div id="education">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className="text-center font-bold text-green-900 text-4xl lg:text-5xl">
                        My Education
                    </h1>
                    <div className="flex justify-center">
                        <span className="inline-block h-1 w-20 rounded-3xl bg-green-900 mt-6 mb-3"></span>
                    </div>
                    <div className="flex flex-wrap -m-4 pt-8 mt-0 md:mt-5 mb-12">
                        <div className="p-4 lg:w-1/2 my-3 mx-auto">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img
                                    alt="team"
                                    className="flex-shrink-0 rounded-lg w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover object-center sm:mb-0 mb-4"
                                    src={college}
                                />
                                <div className="flex-grow sm:pl-4">
                                    <h2 className="title-font font-medium text-2xl text-gray-900">
                                        Diploma In Engineering
                                    </h2>
                                    <h3 className="text-gray-500 mb-3 mt-1">
                                        Power Technology
                                    </h3>
                                    <h3 className="text-gray-800 text-lg font-medium mb-3">
                                        Kushtia Polytechnic Institute
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;
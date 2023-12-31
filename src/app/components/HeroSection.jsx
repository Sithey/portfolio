"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import {motion} from "framer-motion";

const HeroSection = () => {

    const pdfFileName = "EnglishCV.pdf"; // Remplacez par le nom de votre fichier PDF
    const pdfUrl = `${process.env.URL}/pdf/${pdfFileName}`;

    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">Hi, I'm{" "}</span>
                        </span>
                        <br/>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Raphael Zerbib',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Java Developer',
                                1000,
                                'Web Developer',
                                1000,
                                'SEO Of Hosting Provider',
                                1000
                            ]}
                            wrapper="span"
                            speed={200}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        I'm passionate about web development and I love creating
                        awesome websites and applications.
                    </p>
                    <div className="mb-6 lg:mb-0 flex flex-col">
                        <a href="https://github.com/Sithey/" target="_blank" rel="noopener noreferrer">
                        <button className="mb-6 px-10 py-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-blue-800 to-blue-600 hover:bg-slate-200 text-white flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="15.5" viewBox="0 0 496 512" className="w-6 h-6 text-gray-400 mr-2">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2.0 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1.0 3.3 0.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1.0-3.3-0.7-5.2-1.6-1.6-3.9-2.3-5.2-1zM86.4 344.8c-0.7 1.3 0.3 2.9 2.3 3.9 1.6 1 3.6 0.7 4.3-0.7 0.7-1.3-0.3-2.9-2.3-3.9-2.0-0.6-3.6-0.3-4.3 0.7zM118.8 387.4c-1.6 1.3-1.0 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 0.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zM130.6 372.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>
                            GitHub
                        </button>
                        </a>

                        <a href="/pdf/EnglishCV.pdf" download>
                            <button
                                className="px-10 py-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-blue-800 to-blue-600 hover:bg-slate-200 text-white flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="15.5" viewBox="0 0 496 512"
                                     className="w-6 h-6 text-gray-400 mr-2">
                                    <path
                                        d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"/>
                                </svg>
                                Download CV
                            </button>
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div
                        className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mx-auto">
                        <Image
                            src="/images/logo.jpg"
                            width={300}
                            height={300}
                            alt="logo image"
                            className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
        ;
};

export default HeroSection;

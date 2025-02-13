"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Img from "@/public/hot-worker.jpg";

export default function InfiniteSlider() {
    return (
        <>

            <section className="w-full h-auto flex justify-center items-center">
                <div className="relative p-8 w-full h-full text-center bg-[#2b6171] flex items-center justify-center">
                    <div className=" max-w-5xl w-full flex flex-col lg:flex-row items-center lg:items-center gap-8">
                        {/* Text Section */}
                        <div className="text-center lg:text-left  flex-1">
                            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-[90px]">
                                See how SlasHR HRIS helps you build an engaging company culture
                            </h1>
                            {/* Button Section */}
                            <div className="mt-6 flex justify-center lg:justify-start">
                                <button
                                    type="submit"
                                    className="group flex items-center justify-center rounded-xl bg-white hover:shadow-lg hover:drop-shadow px-4 py-4 text-[#2A6171] transition"
                                >
                                    <span className="group text-sm sm:text-base flex w-full items-center justify-center rounded text-center font-medium">
                                        Learn More
                                    </span>
                                    <svg
                                        className="shrink-0 group-hover:ml-8 ml-4 h-4 w-4 transition-all"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </button>

                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="flex-1 hidden sm:flex justify-center ">
                            <Image
                                src={Img}
                                alt="Hot Worker"
                                width={500}
                                height={500}
                                className="object-cover rounded-lg "
                            />
                        </div>
                    </div>
                </div>
            </section >
        </>

    );
}

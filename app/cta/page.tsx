"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Img from "@/public/hot-worker.jpg";

export default function HowSlasHR() {
    return (
        <section className="w-full flex justify-center items-center py-12 bg-[#195262]" aria-labelledby="section-heading">
            <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center gap-8 px-6">
                {/* Text Section */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 id="section-heading" className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                        See how SlasHR HRIS helps you build an engaging company culture
                    </h1>
                    <p className="mt-4 text-white text-base md:text-lg">
                        Discover the benefits of a streamlined HR system that fosters employee engagement and productivity.
                    </p>
                    {/* Button Section */}
                    <div className="mt-6 flex justify-center lg:justify-start">
                        <a
                            href="/learn-more"
                            className="group flex items-center rounded-xl bg-white px-5 py-3 text-[#2A6171] font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
                            aria-label="Learn more about SlasHR HRIS"
                        >
                            <span className="group-hover:pr-4 transition-all">Learn More</span>
                            <svg
                                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>
                {/* Image Section */}
                <div className="flex-1 hidden sm:flex justify-center">
                    <Image
                        src={Img}
                        alt="A dedicated worker focused on their task"
                        width={500}
                        height={500}
                        className="object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
];

export default function InfiniteSlider() {
    return (
        <>
            <section className="py-8  relative overflow-hidden">
                <div className="mx-auto max-w-9xl px-4 text-center">
                    <h2 className="mb-8 lg:mb-20 text-xl font-bold tracking-tight leading-tight text-[#195262]">
                        1200 companies across various industries use SlasHR
                    </h2>
                    <div className="relative w-full flex items-center">
                        <motion.div
                            className="flex space-x-12"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                        >
                            {[...logos, ...logos, ...logos].map((logo, index) => (
                                <div key={index} className="flex justify-center items-center w-36">
                                    <Image
                                        src={logo}
                                        alt={`Company Logo ${index}`}
                                        width={100}
                                        height={40}
                                        className="h-9 hover:opacity-80"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="w-full h-[35rem]  flex justify-center items-center pt-12">
                <div
                    className="relative  p-8 space-y-8 w-full h-full text-center bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: "url('/slider/banner.png')" }}
                >
                    <div className="p-6  max-w-4xl">
                        <div className="space-y-10">
                            <h2 className="text-white font-heading font-bold text-4xl sm:text-5xl ">
                                Core HR and so much more
                            </h2>
                            <p className="text-base sm:text-xl text-white ">
                                From out-of-the-box onboarding, workflows, performance management, and compensation management to integrations , core HR functionally gives your team everything needed to operate efficiently.
                            </p>
                        </div>
                        <a className="inline-flex items-center justify-center font-medium mt-10" href="#">
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
                        </a>
                    </div>
                </div>
            </section>
            <section className="w-full flex justify-center mt-16">

            </section>
        </>

    );
}

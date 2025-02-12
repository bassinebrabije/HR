"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
    "/logo1.svg",
    "/logo2.svg",
    "/logo3.svg",
    "/logo4.svg",
    "/logo5.svg",
    "/logo6.svg",
];

export default function InfiniteSlider() {
    return (
        <section className="bg-white py-8 lg:py-16">
            <div className="mx-auto max-w-screen-xl px-4 text-center">
                <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-4xl">
                    You’ll be in good company
                </h2>
                <div className="overflow-hidden relative w-full">
                    <motion.div
                        className="flex space-x-12 w-max"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }} // Slower speed
                    >
                        {[...logos, ...logos].map((logo, index) => (
                            <div key={index} className="flex justify-center items-center w-36">
                                <Image src={logo} alt={`Company Logo ${index}`} width={100} height={40} className="h-9 hover:opacity-80 dark:hover:opacity-100" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

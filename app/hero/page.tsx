'use client'

import Image from 'next/image';
import Heroimg from '@/public/Analytics.png';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="py-12 sm:pt-24" aria-labelledby="hero-title">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                {/* Animated Wrapper for the Source | Manage | Collaborate */}
                <motion.div
                    className="mb-8 flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <p className="relative rounded-full font-normal px-4 py-1.5 text-xs 2xl:text-sm leading-6 text-[#195262] ring-1 ring-inset ring-[#195262]/20">
                        <span className="p-2">Source | Manage | Collaborate</span>
                    </p>
                </motion.div>

                <div className="mx-auto max-w-5xl text-center">
                    {/* Animated Title */}
                    <motion.h1
                        id="hero-title"
                        className="text-4xl font-bold tracking-tight text-[#195262] sm:text-7xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        HR Software to Empower Your Team
                    </motion.h1>

                    {/* Animated Description */}
                    <motion.p
                        className="mt-6 text-xs font-medium sm:text-base leading-5 2xl:leading-7 text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        Customizable and easy-to-use Human Resource Management software that automates
                        <br className="hidden sm:block" />
                        time, payroll, talent, and finance processes in a centralized hub. Free up your time to focus
                        <br className="hidden sm:block" /> on your people, not paperwork.
                    </motion.p>

                    <motion.div className="mt-8 flex items-center justify-center gap-x-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}>
                        {/* Animated Button */}
                        <button
                            type="submit"
                            className="group flex items-center justify-center rounded-xl bg-[#2A6171]  hover:shadow-lg hover:drop-shadow px-4 py-4 text-white transition"
                        >
                            <span className="group text-sm sm:text-base  flex w-full items-center justify-center rounded text-center font-medium">
                                Request Demo
                            </span>
                            <svg
                                className="shrink-0 group-hover:ml-8 ml-4 h-4 w-4 transition-all"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                ></path>
                            </svg>
                        </button>
                    </motion.div>
                </div>

                {/* Animated Image */}
                <motion.div
                    className="mt-5 flow-root"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div>
                        <Image
                            src={Heroimg}
                            alt="Illustration of HR software features with a clean and modern design"
                            className="rounded-md"
                            width={2432}
                            height={1442}
                            loading="lazy"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;





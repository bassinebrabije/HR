'use client'

import Image from "next/image";
import Heroimg from "@/public/Analytics.png";

const HeroSection = () => {



    return (
        <section className="py-12 sm:py-24">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="mb-8 flex justify-center ">
                    <p className="relative rounded-full font-normal px-4 py-1.5 text-xs 2xl:text-sm leading-6 text-[#195262] ring-1 ring-inset  ring-[#195262]/20 ">
                        <span className="p-2">Source | Manage | Collaborate</span>
                    </p>
                </div>
                <div className="mx-auto max-w-5xl  text-center">
                    <h1 className="text-4xl  font-bold tracking-tight text-[#195262] sm:text-7xl">
                        HR Software to Empower Your Team
                    </h1>
                    <p className="mt-6 text-xs font-medium sm:text-base leading-5 2xl:leading-7 text-gray-600">
                        Customizable and easy-to-use Human Resource Management software that automates <br className="hidden sm:block" />
                        time, payroll, talent and finance processes in a centralized hub. Free up your time to focus <br className="hidden sm:block" />  on your people, not paperwork.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-x-6">
                        <button
                            type="submit"
                            className="group flex items-center justify-center rounded-xl bg-[#2A6171]  hover:shadow-lg hover:drop-shadow px-6 py-4 text-white transition"
                        >
                            <span className="group  flex w-full items-center justify-center rounded text-center font-medium">
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
                    </div>
                </div>
                <div className="mt-10 flow-root sm:mt-16">
                    <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-[#195262]/20 lg:-m-4 lg:rounded-2xl lg:p-4">
                        <Image src={Heroimg}
                            alt="Hero Image"
                            className="rounded-md  ring-1 ring-[#195262]/20"
                            width={2432}
                            height={1442}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div >
        </section >
    );
};

export default HeroSection;  
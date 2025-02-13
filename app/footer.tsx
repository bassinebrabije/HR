"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import Logo from "@/public/logo.svg";

export default function InfiniteSlider() {

    const [year, setYear] = useState<number>(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);
    return (

        <footer className=" bg-[#f7fdff59]">
            <div className="container mx-auto p-0 md:p-8 xl:px-0  ">
                <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 ">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="space-y-4">
                            <div>
                                <a href="/">
                                    <div className="flex items-center  ">
                                        <Image src={Logo} alt="Logo" width={150} height={250} />
                                    </div>
                                </a>
                            </div>
                            <div className="max-w-md pr-16 text-md text-black">
                                Slashr is the best HR system to manage all your HRIS needs, including payroll, employee records, and performance tracking.                            </div>

                        </div>
                        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-md font-semibold leading-6 text-white">Our Solutions</h3>
                                    <ul className="mt-6 space-y-4">
                                        <li><a href="/aiplatform" className="text-black hover:text-[#5699AD]">AI Platform</a></li>
                                        <li><a href="/aialgorithms" className="text-black hover:text-[#5699AD]">AI Algorithms</a></li>
                                        <li><a href="/industryapplications" className="text-black hover:text-[#5699AD]">Industry Applications</a></li>
                                    </ul>
                                </div>
                                <div className="mt-10 md:mt-0">
                                    <h3 className="text-md font-semibold leading-6 text-white">Use Cases</h3>
                                    <ul className="mt-6 space-y-4">
                                        <li><a href="/predictiveanalysis" className="text-black hover:text-[#5699AD]">Predictive Analysis</a></li>
                                        <li><a href="/customerexperience" className="text-black hover:text-[#5699AD]">Customer Experience</a></li>
                                        <li><a href="/automation" className="text-black hover:text-[#5699AD]">Automation</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-md font-semibold leading-6 text-white">Resources</h3>
                                    <ul className="mt-6 space-y-4">
                                        <li><a href="/pricing" className="text-black hover:text-[#5699AD]">Pricing</a></li>
                                        <li><a href="/blog" className="text-black hover:text-[#5699AD]">Blog</a></li>
                                        <li><a href="/casestudies" className="text-black hover:text-[#5699AD]">Case Studies</a></li>
                                        <li><a href="/terms" className="text-black hover:text-[#5699AD]">Terms of Service</a></li>
                                        <li><a href="/privacy" className="text-black hover:text-[#5699AD]">Privacy Policy</a></li>
                                    </ul>
                                </div>
                                <div className="mt-10 md:mt-0">
                                    <h3 className="text-md font-semibold leading-6 text-white">Company</h3>
                                    <ul className="mt-6 space-y-4">
                                        <li><a href="/aboutus" className="text-black hover:text-[#5699AD]">About Us</a></li>
                                        <li><a href="/careers" className="text-black hover:text-[#5699AD]">Careers</a></li>
                                        <li><a href="/contactus" className="text-black hover:text-[#5699AD]">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 border-t border-gray-400/30 pt-8 sm:mt-16 text-center text-black">
                        Copyright © {year} Hi SlasHR, Inc.
                        All rights reserved.
                    </div>
                </div>
            </div>
        </footer>

    );
}

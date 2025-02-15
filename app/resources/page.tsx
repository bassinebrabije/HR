"use client";

import Image from "next/image";
import goals from "@/public/goals.png";

export default function Resources() {
    return (
        <>
            <section className="py-10">
                <div className="mb-6 sm:mb-12 text-center px-4">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl text-[#195262] font-bold leading-tight">
                        Resources to Take Your HR to the Next Level
                    </h1>
                    <p className="max-w-3xl mx-auto mt-4 text-base sm:text-lg lg:text-xl text-gray-600 font-normal">
                        DEI&B, managing remote teams, and streamlining HR on your mind? These resources are full of guidance from other HR leaders, the latest tips, and much more.
                    </p>
                </div>

                <div className="mx-auto grid max-w-screen-xl justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8 md:grid-cols-3">
                    <article className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition sm:hover:translate-y-2 sm:hover:shadow-lg">
                        <a href="#">
                            <Image src={goals} className="h-56 w-full object-cover" alt="Article 1 Image" />
                            <div className="flex-auto px-6 py-5">
                                <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">How to calculate and improve your attrition rate</h3>
                                <p className="mb-4 text-base text-gray-600">Use this article to learn everything you need to know about calculating and improving attrition…</p>

                                <div className="mt-4 flex justify-left lg:justify-start">
                                    <button
                                        type="submit"
                                        className="group flex items-center justify-center rounded-xl bg-[#195262] hover:shadow-lg hover:drop-shadow px-4 py-4 text-white transition"
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
                        </a>
                    </article>

                    <article className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition sm:hover:translate-y-2 sm:hover:shadow-lg">
                        <a href="#">
                            <Image src={goals} className="h-56 w-full object-cover" alt="Article 2 Image" />
                            <div className="flex-auto px-6 py-5">
                                <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">Top 5 HR goals for 2025</h3>
                                <p className="mb-12 text-base text-gray-600 ">These five HR industry goals serve as guiding principles to help global HR leaders like…</p>
                                <div className="mt-6 flex justify-left lg:justify-start">
                                    <button
                                        type="submit"
                                        className="group flex items-center justify-center rounded-xl bg-[#195262] hover:shadow-lg hover:drop-shadow px-4 py-4 text-white transition"
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
                        </a>
                    </article>

                    <article className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition sm:hover:translate-y-2 sm:hover:shadow-lg">
                        <a href="#">
                            <Image src={goals} className="h-56 w-full object-cover" alt="Article 3 Image" />
                            <div className="flex-auto px-6 py-5">
                                <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">A guide to HR metrics that matter</h3>
                                <p className="mb-4 text-base text-gray-600">Use HR metrics to take a data-driven approach to track and assess your progress and…</p>
                                <div className="mt-4 flex justify-left lg:justify-start">
                                    <button
                                        type="submit"
                                        className="group flex items-center justify-center rounded-xl bg-[#195262] hover:shadow-lg hover:drop-shadow px-4 py-4 text-white transition"
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
                        </a>
                    </article>
                </div>
            </section>
        </>
    );
}

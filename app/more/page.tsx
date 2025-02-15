import Image from "next/image";

import Img from "@/public/Section-1-11.webp";


const More = () => {
    return (
        <section >
            <div className="relative p-8 flex items-center justify-center">
                <div className="max-w-6xl w-full flex flex-col lg:flex-row  items-center lg:items-center gap-8">
                    {/* Text Section */}
                    <div className=" lg:text-left  flex-1">
                        <p className="font-semibold mb-2 sm:mb-5">Say hi to HR tech that’s
                        </p>
                        <h1 className="text-3xl md:text-4xl  font-bold text-[#195262] leading-[40px]">
                            Made for all <br className="hidden sm:block" /> users, not just HR
                        </h1>
                        <p className="mt-2 sm:mt-6 text-sm  sm:text-base text-gray-600">
                            SlasHR handles HR’s needs but doesn’t stop there. Designed to be a central system
                            for all your people—from the C-suite to direct contributors and managers SlasHR
                            beautiful interface makes every task your people complete feel like using their
                            favorite social network, leading to wider adoption, engagement, and productivity
                            (#success).
                        </p>
                        {/* Button Section */}
                        <div className="mt-4 flex justify-left lg:justify-start">
                            <button
                                type="submit"
                                className="group  hover:underline  flex items-center justify-center rounded-xl py-2 text-[#195262]  "
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
                    <div className="flex-1  sm:flex justify-center ">
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
            <div className="relative p-8 flex items-center justify-center">
                <div className="max-w-6xl w-full flex flex-col lg:flex-row  items-center lg:items-center gap-8">
                    {/* Image Section */}

                    <div className="flex-1  xl:flex justify-center  hidden">
                        <Image
                            src={Img}
                            alt="Hot Worker"
                            width={500}
                            height={500}
                            className="object-cover rounded-lg "
                        />
                    </div>
                    {/* Text Section */}
                    <div className=" lg:text-left  flex-1">
                        <p className="font-semibold mb-2 sm:mb-5">Say hi to HR tech that

                        </p>
                        <h1 className="text-3xl md:text-4xl  font-bold text-[#195262] leading-[40px]">
                            Drives decisions  <br className="hidden sm:block" /> with data

                        </h1>
                        <p className="mt-2 sm:mt-6 text-sm  sm:text-base text-gray-600">
                            HR is a key driver of business success, and SlasHR HRIS gives you the data to prove it.
                            SlasHR advanced analytics let you easily track important KPIs and impact on business
                            goals. And, because SlasHR is used by all employees, you benefit from vast amounts of
                            rich data, which means stronger insights for better decision making.


                        </p>
                        {/* Button Section */}
                        <div className="mt-4 flex justify-left lg:justify-start">
                            <button
                                type="submit"
                                className="group flex items-center justify-center rounded-xl py-2 text-[#195262]  "
                            >
                                <span className="group hover:underline  text-sm sm:text-base flex w-full items-center justify-center rounded text-center font-medium">
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
                    <div className="flex-1 flex  xl:hidden justify-center ">
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
            <div className="relative p-8 flex items-center justify-center">
                <div className="max-w-6xl w-full flex flex-col lg:flex-row  items-center lg:items-center gap-8">
                    {/* Text Section */}
                    <div className=" lg:text-left  flex-1">
                        <p className="font-semibold mb-2 sm:mb-5">Say hi to HR tech that
                        </p>
                        <h1 className="text-3xl md:text-4xl  font-bold text-[#195262] leading-[40px]">
                            Powers business growth <br className="hidden sm:block" /> and expansion
                        </h1>
                        <p className="mt-2 sm:mt-6 text-sm  sm:text-base text-gray-600">
                            At its very core, SlasHR was designed with agility and configurability in mind.
                            Whether it’s expanding to a new location or hiring dozens of new joiners at
                            the speed of light, SlasHR HRIS gives you autonomy, adapts to your organization’s
                            ever-changing needs, saves admin time, and ensures you remain compliant.
                        </p>
                        {/* Button Section */}
                        <div className="mt-4 flex justify-left lg:justify-start">
                            <button
                                type="submit"
                                className="group hover:underline  flex items-center justify-center rounded-xl py-2 text-[#195262]  "
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
                    <div className="flex-1  sm:flex justify-center ">
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
            <div className="relative p-8 flex items-center justify-center">
                <div className="max-w-6xl w-full flex flex-col lg:flex-row  items-center lg:items-center gap-8">
                    <div className="flex-1   xl:flex justify-center  hidden">
                        <Image
                            src={Img}
                            alt="Hot Worker"
                            width={500}
                            height={500}
                            className="object-cover rounded-lg "
                        />
                    </div>
                    {/* Text Section */}
                    <div className=" lg:text-left  flex-1">
                        <p className="font-semibold mb-2 sm:mb-5">Say hi to HR tech that

                        </p>
                        <h1 className="text-3xl md:text-4xl  font-bold text-[#195262] leading-[40px]">
                            Connects employees and <br className="hidden sm:block" /> inspires belonging
                        </h1>
                        <p className="mt-2 sm:mt-6 text-sm  sm:text-base text-gray-600">
                            Ensuring your people feel included and connected is critical when
                            your team is WFO, WFH, WFAnywhere. Bob provides essential engagement
                            features that drive communication, inclusion, and belonging—inspiring
                            a remarkable experience for every employee.
                        </p>
                        {/* Button Section */}
                        <div className="mt-4 flex justify-left lg:justify-start">
                            <button
                                type="submit"
                                className="group  hover:underline  flex items-center justify-center rounded-xl py-2 text-[#195262]  "
                            >
                                <span className="group text-sm sm:text-base flex w-full items-center justify-center rounded text-center font-medium">
                                    See how
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
                    {/* Image Section */}
                    <div className="flex-1 flex   xl:hidden justify-center ">
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
        </section>
    );
};

export default More;

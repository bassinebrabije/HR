'use client'

import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const dropdownItems = {
        solutions: [
            { name: "Solutions Overview", href: "#" },
            { name: "Culture", href: "#" },
            { name: "HR Automation", href: "#" },
            { name: "DEI&B", href: "#" },
            { name: "Pay Transparency", href: "#" },
            { name: "Strategic Hiring", href: "#" },
            { name: "Integrations", href: "#" },
        ],
        platform: [
            { name: "Platform Overview", href: "#" },
            { name: "Core HR", href: "#" },
            { name: "Learning", href: "#" },
            { name: "Time Off", href: "#" },
            { name: "Onboarding", href: "#" },
            { name: "Time and Attendance", href: "#" },
            { name: "Compensation", href: "#" },
            { name: "Payroll Hub", href: "#" },
            { name: "Hiring", href: "#" },
            { name: "Surveys", href: "#" },
            { name: "Performance", href: "#" },
        ],
        about: [
            { name: "Our Story", href: "#" },
            { name: "Leadership", href: "#" },
            { name: "Careers", href: "#" },
        ],
        resources: [
            { name: "Blog", href: "#" },
            { name: "Case Studies", href: "#" },
            { name: "Guides", href: "#" },
        ],
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav id="nav" className={`fixed w-full z-50 transition-all duration-300 ${scrolling ? 'bg-white' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-6 flex justify-between items-center lg:px-32">
                <Link href="/" className="text-xl font-bold flex items-center space-x-2">
                    <Image src={logo} alt="Logo" width={120} height={120} />
                </Link>
                <div className="hidden md:flex space-x-6 items-center">
                    {Object.entries(dropdownItems).map(([key, items]) => (
                        <div className="relative" key={key} ref={dropdownRef}>
                            <button
                                className="text-black text-sm flex items-center hover:text-[#5699AD]"
                                onClick={() => setDropdownOpen(dropdownOpen === key ? null : key)}
                            >
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </button>
                            {dropdownOpen === key && (
                                <div className="absolute left-0 mt-5 w-[25rem] bg-white rounded-lg shadow-lg py-2 px-4 grid grid-cols-2">
                                    {items.map((item, index) => (
                                        <a key={index} href={item.href} className="block px-3 py-2 text-black hover:bg-gray-100 rounded-lg">
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <a href="#" className="hidden text-sm md:block bg-[#2A6171] text-white px-5 py-2 rounded-lg hover:shadow-lg hover:drop-shadow font-medium">
                    Request Demo
                </a>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#2A6171] focus:outline-none">
                    {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>
            <div className={`fixed top-0 left-0 w-full h-full bg-white transform ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-40 md:hidden`}>
                <div className="flex justify-between items-center p-6 border-b">
                    <Link href="/" className="text-xl font-bold flex items-center space-x-2">
                        <Image src={logo} alt="Logo" width={120} height={120} />
                    </Link>
                    <button onClick={() => setMobileMenuOpen(false)} className="text-[#2A6171] focus:outline-none">
                        <FaTimes size={24} />
                    </button>
                </div>
                <div className="flex flex-col space-y-4 p-6">
                    {Object.entries(dropdownItems).map(([key, items]) => (
                        <div key={key} className="pt-4">
                            <button className="w-full text-left text-black flex items-center justify-between uppercase hover:text-[#5699AD]"
                                onClick={() => setMobileDropdownOpen(mobileDropdownOpen === key ? null : key)}>
                                {key.toUpperCase()}
                            </button>
                            {mobileDropdownOpen === key && (
                                <div className="mt-2 px-5 rounded-lg">
                                    {items.map((item, index) => (
                                        <a key={index} href={item.href} className="block text-black hover:text-[#5699AD] py-1">
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <a href="#" className="bg-[#2A6171] text-white px-5 py-2 rounded-lg hover:shadow-lg hover:drop-shadow text-center">
                        Request Demo
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

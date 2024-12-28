"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import HamburgerMenu from "./HamburgerMenu";

const playFair = Playfair_Display({ subsets: ["latin"], weight: "400" });

const menuItems = [
    {
        label: "ALL",
        dropdown: ["View All Products"],
    },
    {
        label: "COLLECTIONS",
        dropdown: ["New Arrivals", "Best Sellers", "Seasonal Favorites"],
    },
    {
        label: "SAREES",
        dropdown: ["Kanjivaram Silk Sarees", "Banarasi Sarees", "Bandhani Sarees"],
    },
    {
        label: "LEHENGA",
        dropdown: ["Bridal Lehenga", "Party Lehenga", "Festive Lehenga"],
    },
    {
        label: "SALWAR",
        dropdown: ["Churidar", "Anarkali", "Plazzo suits"],
    },
    {
        label: "CHOORI",
        dropdown: ["Bangles", "Bracelets", "Cuffs"],
    },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleDropdown = (label: string) => {
        if (openDropdown === label) {
            setOpenDropdown(null); // Close if it's already open
        } else {
            setOpenDropdown(label); // Open the selected dropdown
        }
    };

    return (
        <header className="bg-[#A0214D] w-full h-20 sticky top-0 flex items-center justify-between px-6 z-20">
            {/* Hamburger Icon */}
            <button
                className="text-white lg:hidden focus:outline-none"
                onClick={toggleMenu}
            >
                <HamburgerMenu />
            </button>

            {/* Logo */}
            <div className={`text-2xl font-bold text-white ${playFair.className}`}>
                <Link href="/">RJ TRADITIONAL</Link>
            </div>

            {/* Search Bar */}
            <div className="relative hidden lg:flex flex-grow justify-center items-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-7 top-5">
                    <path d="M20 20L15.65 15.65M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full h-10 ps-4 text-black rounded-full focus:outline-none"
                />
            </div>

            {/* Navigation Links */}
            <nav
                className={`absolute lg:static top-20 left-0 w-full lg:w-auto lg:flex bg-pink-700 lg:bg-transparent flex-col lg:flex-row lg:items-center transition-all ${isMenuOpen ? "block" : "hidden"
                    }`}
            >
                <ul className="flex flex-col lg:flex-row gap-6 p-2">
                    {menuItems.map((menu, index) => (
                        <li key={index} className="relative group">
                            <button
                                className="text-white flex items-center"
                                onClick={() => toggleDropdown(menu.label)}
                            >
                                {menu.label}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 ml-2 transition-transform duration-300 lg:group-hover:rotate-180 ${openDropdown === menu.label ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {/* Dropdown */}
                            <ul
                                className={`absolute left-0 bg-[#d39c55] text-black shadow-lg rounded transform translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:block transition-transform duration-500 ease-in-out ${openDropdown === menu.label
                                    ? "opacity-100 block translate-y-0"
                                    : "opacity-0 hidden"
                                    }`}
                            >
                                {menu.dropdown.map((item, idx) => (
                                    <li key={idx}>
                                        <Link
                                            href="#"
                                            className="block px-4 py-2 hover:bg-[#fdbc67] rounded"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Utility Icons */}
            <div className="hidden lg:flex gap-4">
                <Link href="#">
                    <svg
                        width="30"
                        height="30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 37"
                    >
                        <path
                            d="M34.7332 7.10709C33.8819 6.31931..."
                            stroke="#FFFEFE"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
                <Link href="#">
                    <svg
                        width="30"
                        height="30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 37"
                    >
                        <path
                            d="M20 2C24.9706 2 29 6.02944 29 11C29..."
                            stroke="#FFFEFE"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Building,
    Home,
    ChevronRight,
    Truck,
    Shirt,
    Timer,
    ShieldCheck,
    BriefcaseBusiness,
    Sparkles,
} from "lucide-react";

export default function Solutions() {
    const [activeTab, setActiveTab] = useState("commercial");

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const solutions = {
        commercial: {
            title: "Commercial Laundry Solutions",
            description:
                "Reliable and efficient laundry services tailored for businesses like hotels, hostels, salons, and more. We ensure timely pickups, quality cleaning, and prompt deliveries to keep your operations running smoothly.",
            image: "/images/commercial-laundry.jpg",
            features: [
                { icon: <Building size={20} />, text: "Hotels & Hostels" },
                { icon: <BriefcaseBusiness size={20} />, text: "Salons & Spas" },
                { icon: <ShieldCheck size={20} />, text: "Safe Fabric Handling" },
            ],
            benefits: [
                "Scheduled pickups & deliveries",
                "Bulk order discounts",
                "Express cleaning options",
                "Customized service plans",
            ],
        },
        residential: {
            title: "Home Laundry Services",
            description:
                "Experience hassle-free laundry with our home services. We pick up, wash, fold, and deliver your clothes, ensuring they’re fresh and ready to wear. Perfect for busy individuals and families.",
            image: "/images/residential-laundry.jpg",
            features: [
                { icon: <Home size={20} />, text: "Doorstep Pickup" },
                { icon: <Shirt size={20} />, text: "Delicate Care" },
                { icon: <Timer size={20} />, text: "Quick Turnaround" },
            ],
            benefits: [
                "Flexible scheduling",
                "Affordable pricing",
                "Same-day delivery options",
                "Easy online booking",
            ],
        },
    };

    return (
        <section className="w-full py-24 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Section Title */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
                        Tailored Laundry Services
                    </span>
                    <h2 className="text-4xl md:text-5xl text-gray-800 font-bold mb-4">
                        Clean Clothes, <span className="text-blue-600">Hassle-Free</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Choose the perfect laundry solution for your needs, whether at home or for your business.
                    </p>
                </motion.div>

                {/* Solution Tabs */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="flex justify-center mb-12"
                >
                    <div className="inline-flex bg-gray-100 p-1 rounded-full">
                        <button
                            onClick={() => setActiveTab("commercial")}
                            className={`flex items-center px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${activeTab === "commercial"
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "text-gray-700 hover:text-blue-600"
                                }`}
                        >
                            <Building size={18} className="mr-2" />
                            Commercial Services
                        </button>
                        <button
                            onClick={() => setActiveTab("residential")}
                            className={`flex items-center px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${activeTab === "residential"
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "text-gray-700 hover:text-blue-600"
                                }`}
                        >
                            <Home size={18} className="mr-2" />
                            Home Services
                        </button>
                    </div>
                </motion.div>

                {/* Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative w-full h-80 sm:h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-xl">
                            {/* Background decoration */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-blue-100 rounded-full blur-2xl opacity-70 z-0"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full blur-2xl opacity-70 z-0"></div>

                            {/* Main image */}
                            <div className="relative z-5 w-full h-full">
                                <Image
                                    src={solutions[activeTab].image}
                                    alt={solutions[activeTab].title}
                                    fill
                                    className="object-cover rounded-2xl transition-transform duration-700 ease-in-out hover:scale-105"
                                />
                            </div>

                            {/* Decorative element */}
                            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full py-2 px-4 z-5 shadow-md">
                                <span className="flex items-center text-blue-600 font-medium text-sm">
                                    <Sparkles size={16} className="mr-1" />
                                    Fresh & Clean
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-7 flex flex-col gap-8"
                    >
                        {/* Solution Title and Description */}
                        <div>
                            <h3 className="text-2xl md:text-3xl text-gray-800 font-bold mb-4">
                                {solutions[activeTab].title}
                            </h3>
                            <p className="text-gray-600 text-lg">
                                {solutions[activeTab].description}
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {solutions[activeTab].features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                                >
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                                        {feature.icon}
                                    </div>
                                    <h4 className="font-medium text-gray-800 mb-1">
                                        {feature.text}
                                    </h4>
                                </div>
                            ))}
                        </div>

                        {/* Benefits List */}
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h4 className="font-medium text-gray-800 mb-4">Key Benefits:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {solutions[activeTab].benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-center text-gray-600">
                                        <svg
                                            className="w-5 h-5 text-blue-500 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Link
                                href={
                                    activeTab === "commercial"
                                        ? "/commercial-services"
                                        : "/home-services"
                                }
                            >
                                <button className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 group">
                                    <span>
                                        {activeTab === "commercial"
                                            ? "Explore Commercial Services"
                                            : "Book Home Service"}
                                    </span>
                                    <ChevronRight
                                        size={20}
                                        className="ml-2 group-hover:translate-x-1 transition-transform"
                                    />
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="flex items-center justify-center px-8 py-4 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full font-medium transition-all duration-300">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

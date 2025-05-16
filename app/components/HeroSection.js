"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Truck, Leaf, Timer } from "lucide-react";
import Header from "./Header"; // your custom header

export default function LaundryHero() {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -40]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const staggerChildren = {
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div className="overflow-hidden w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative">
            {/* Background bubbles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-br from-blue-200 to-cyan-100 opacity-30"
                        style={{
                            width: `${Math.random() * 80 + 40}px`,
                            height: `${Math.random() * 80 + 40}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            x: [0, Math.random() * 10 - 5, 0],
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <section
                ref={containerRef}
                className="min-h-screen flex flex-col items-center relative z-10 px-6 lg:px-16 xl:px-20"
            >
                <Header />

                <div className="w-full max-w-7xl mx-auto lg:mt-10 flex flex-col lg:flex-row items-center justify-between gap-12 pt-12">
                    {/* Left Text Content */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial="hidden"
                        animate="visible"
                        variants={staggerChildren}
                    >
                        <motion.span
                            className="inline-block px-4 py-1 rounded-full bg-cyan-100 text-cyan-700 font-medium text-sm mb-4"
                            variants={fadeInUp}
                        >
                            Your Trusted Laundry Partner
                        </motion.span>

                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
                            variants={fadeInUp}
                        >
                            Clean Clothes, <br />
                            <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent">
                                Delivered Fresh
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg text-gray-600 mb-8 max-w-lg"
                            variants={fadeInUp}
                        >
                            Fast, eco-friendly laundry services with doorstep pickup & delivery. Experience freshness like never before.
                        </motion.p>

                        <motion.div className="flex flex-col sm:flex-row gap-4 mb-10" variants={fadeInUp}>
                            <Link href="/book">
                                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-8 rounded-full font-medium shadow-lg hover:shadow-xl transition-all">
                                    Book Now
                                </button>
                            </Link>
                            <Link href="/services">
                                <button className="bg-white border border-gray-300 text-gray-700 py-3 px-8 rounded-full font-medium shadow-md hover:shadow-lg">
                                    View Services
                                </button>
                            </Link>
                        </motion.div>

                        {/* Features */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-4"
                            variants={staggerChildren}
                        >
                            <motion.div className="flex items-center" variants={fadeInUp}>
                                <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mr-3">
                                    <Truck size={20} className="text-cyan-600" />
                                </div>
                                <span className="text-gray-700">Free Pickup & Delivery</span>
                            </motion.div>

                            <motion.div className="flex items-center" variants={fadeInUp}>
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                    <Leaf size={20} className="text-green-600" />
                                </div>
                                <span className="text-gray-700">Eco-Friendly Cleaning</span>
                            </motion.div>

                            <motion.div className="flex items-center" variants={fadeInUp}>
                                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                                    <Timer size={20} className="text-yellow-600" />
                                </div>
                                <span className="text-gray-700">Express Delivery</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                        style={{ y: parallaxY, opacity }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Image
                                    src="/images/wicker-basket.png"
                                    alt="Laundry service"
                                    width={450}
                                    height={450}
                                    className="w-full h-auto drop-shadow-2xl"
                                    priority
                                />
                            </motion.div>

                            {/* Decorative blobs */}
                            <div className="absolute -top-10 -left-16 w-32 h-32 bg-cyan-100 rounded-full blur-3xl opacity-50" />
                            <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-40" />
                        </div>
                    </motion.div>
                </div>

                {/* Trust Section */}
                <motion.div
                    className="w-full max-w-5xl mx-auto mt-16 bg-white/70 backdrop-blur-lg rounded-xl p-6 shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="text-center mb-4">
                        <h3 className="text-sm text-gray-500 font-medium">Trusted by 500+ Customers in UAE</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center justify-items-center">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="h-12 w-24 bg-gray-200 rounded-md opacity-50" />
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
}

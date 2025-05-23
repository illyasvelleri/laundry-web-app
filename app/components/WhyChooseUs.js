'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import Link from 'next/link';
import { CheckCircle, Sparkles, ThumbsUp, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section className="w-full py-24 px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden pb-20 md:pb-0">{/*  */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-blue-100 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-rose-100 blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
            What Sets Us Apart
          </span>
          <h2 className="text-4xl md:text-5xl text-gray-800 font-bold mb-6">
            Why Choose <span className="text-blue-600">Fast Laundry</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience convenience, quality, and reliability with every wash.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 flex flex-col items-center text-center contain-content"
          >
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
              <ThumbsUp className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
              {isInView ? <CountUp end={4.8} decimals={1} duration={2.5} /> : '0'}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Customer Rating</h3>
            <p className="text-gray-600">
              Loved by hundreds of happy clients across the city for speed and reliability.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 flex flex-col items-center text-center contain-content"
          >
            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-pink-500" />
            </div>
            <div className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent mb-2">
              {isInView ? <CountUp end={1500} duration={2.5} suffix="+" /> : '0'}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Clothes Washed</h3>
            <p className="text-gray-600">
              From delicates to heavy loads — we’ve handled them all with care and precision.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 flex flex-col items-center text-center contain-content"
          >
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <ShieldCheck className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Hygiene Guarantee</h3>
            <p className="text-gray-600">
              All clothes are handled with sanitized machines and eco-friendly detergents.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {[
            {
              title: 'Free Pickup & Delivery',
              description: 'We come to your doorstep and deliver fresh clothes right on time.',
            },
            {
              title: 'Quick Turnaround',
              description: 'Same-day or next-day service available — because your time matters.',
            },
            {
              title: 'Affordable Packages',
              description: 'Tailored pricing for households, hostels, and commercial clients.',
            },
            {
              title: 'Stain Removal Experts',
              description: 'Advanced techniques to ensure spotless results every time.',
            },
          ].map((feature, index) => (
            <div key={index} className="flex items-start p-4">
              <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-800 mb-1">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/about">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto group">
              <span>Learn More About Us</span>
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Wash & Fold",
      desc: "Fresh wash and tidy fold, priced by weight.",
      price: "AED 10 / kg",
      href: "/services/wash-fold",
      img: "/Images/laundry.jpg",
    },
    {
      title: "Dry Cleaning",
      desc: "Premium solvent cleaning for delicate fabrics.",
      price: "AED 25 / piece",
      href: "/services/dry-cleaning",
      img: "/Images/laundry.jpg",
    },
    {
      title: "Ironing",
      desc: "Crisp press & steam finish for every garment.",
      price: "AED 5 / piece",
      href: "/services/ironing",
      img: "/Images/laundry.jpg",
    },
    {
      title: "Pickup & Delivery",
      desc: "Door-to-door within city limits.",
      price: "AED 15 flat",
      href: "/services/pickup-delivery",
      img: "/Images/laundry.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl font-bold text-[#0d6efd]">
          Laundry Services
        </h2>
        <p className="mt-2 text-gray-600">
          Clean, fast, and professional laundry solutions.
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto px-4">
        <div className="flex gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 min-w-[640px] md:min-w-0">
          {services.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[260px] md:min-w-0 bg-[#f5f5f5] border border-[#ccc] rounded-xl shadow-sm p-4 flex-shrink-0 flex flex-col"
            >
              <div className="h-36 w-full flex items-center justify-center mb-4 overflow-hidden rounded">
                <img
                  src={s.img}
                  alt={s.title}
                  className="object-cover h-full w-full rounded"
                  loading="lazy"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {s.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1 flex-1">{s.desc}</p>
              <div className="font-bold text-[#0d6efd] mt-3">{s.price}</div>

              <Link
                href={s.href}
                className="mt-4 inline-flex items-center text-sm text-[#0d6efd] hover:underline font-medium"
              >
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="mt-8 text-center">
        <Link
          href="/services"
          className="inline-block bg-[#0d6efd] text-white px-6 py-2 rounded-full text-sm font-semibold shadow hover:bg-[#084fcf] transition"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}

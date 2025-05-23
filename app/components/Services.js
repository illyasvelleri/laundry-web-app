// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export default function Services() {
//   const services = [
//     {
//       title: "Wash & Fold",
//       desc: "Fresh wash and tidy fold, priced by weight.",
//       price: "AED 10 / kg",
//       href: "/services/wash-fold",
//       img: "/Images/laundry.jpg",
//     },
//     {
//       title: "Dry Cleaning",
//       desc: "Premium solvent cleaning for delicate fabrics.",
//       price: "AED 25 / piece",
//       href: "/services/dry-cleaning",
//       img: "/Images/laundry.jpg",
//     },
//     {
//       title: "Ironing",
//       desc: "Crisp press & steam finish for every garment.",
//       price: "AED 5 / piece",
//       href: "/services/ironing",
//       img: "/Images/laundry.jpg",
//     },
//     {
//       title: "Pickup & Delivery",
//       desc: "Door-to-door within city limits.",
//       price: "AED 15 flat",
//       href: "/services/pickup-delivery",
//       img: "/Images/laundry.jpg",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-[#0d6efd] drop-shadow-sm">
//             Laundry Services
//           </h2>
//           <p className="mt-3 text-gray-600 text-base">
//             Clean, fast, and professional laundry solutions.
//           </p>
//         </div>

//         {/* Scrollable Container for Mobile */}
//         <div className="overflow-x-auto md:overflow-visible">
//           <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 min-w-[640px] md:min-w-0 px-1 pb-2">
//             {services.map((s, i) => (
//               <motion.article
//                 key={i}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 viewport={{ once: true }}
//                 className="min-w-[260px] md:min-w-0 backdrop-blur-md bg-white/70 border border-blue-100 rounded-2xl shadow-lg hover:shadow-xl p-5 transition-all duration-300 flex flex-col"
//               >
//                 <div className="h-36 w-full mb-4 overflow-hidden rounded-xl">
//                   <img
//                     src={s.img}
//                     alt={s.title}
//                     className="object-cover h-full w-full transition-transform duration-300 hover:scale-105 rounded-xl"
//                     loading="lazy"
//                   />
//                 </div>

//                 <h3 className="text-lg font-semibold text-gray-800">{s.title}</h3>
//                 <p className="text-sm text-gray-600 mt-1 flex-1">{s.desc}</p>
//                 <div className="font-bold text-[#0d6efd] mt-3">{s.price}</div>

//                 <Link
//                   href={s.href}
//                   className="mt-4 inline-flex items-center text-sm text-[#0d6efd] hover:underline font-medium"
//                 >
//                   Learn more <ArrowRight className="w-4 h-4 ml-1" />
//                 </Link>
//               </motion.article>
//             ))}
//           </div>
//         </div>

//         {/* View All Button */}
//         <div className="mt-10 text-center">
//           <Link
//             href="/services"
//             className="inline-block bg-[#0d6efd] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md hover:bg-[#0a53c4] transition"
//           >
//             View All Services
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


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
      img: "/Images/wash-fold.jpg",
    },
    {
      title: "Dry Cleaning",
      desc: "Premium solvent cleaning for delicate fabrics.",
      price: "AED 25 / piece",
      href: "/services/dry-cleaning",
      img: "/Images/dry-cleaning.jpg",
    },
    {
      title: "Ironing",
      desc: "Crisp press & steam finish for every garment.",
      price: "AED 5 / piece",
      href: "/services/ironing",
      img: "/Images/ironing.jpg",
    },
    {
      title: "Pickup & Delivery",
      desc: "Door-to-door within city limits.",
      price: "AED 15 flat",
      href: "/services/pickup-delivery",
      img: "/Images/pickup-delivery.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#0d6efd] drop-shadow-sm">
            Laundry Services
          </h2>
          <p className="mt-3 text-gray-600 text-base">
            Clean, fast, and professional laundry solutions.
          </p>
        </div>

        {/* Scrollable Container for Mobile */}
        <div className="overflow-x-auto md:overflow-visible custom-scroll px-1 pb-3">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 min-w-[700px] md:min-w-0 px-2">
            {services.map((s, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[260px] md:min-w-0 backdrop-blur-md bg-white/70 border border-blue-100 rounded-2xl shadow-lg hover:shadow-xl p-5 transition-all duration-300 flex flex-col"
              >
                <div className="h-36 w-full mb-4 overflow-hidden rounded-xl">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="object-cover h-full w-full transition-transform duration-300 hover:scale-105 rounded-xl"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-800">{s.title}</h3>
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
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-block bg-[#0d6efd] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md hover:bg-[#0a53c4] transition"
          >
            View All Services
          </Link>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scroll::-webkit-scrollbar {
          height: 10px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(13, 110, 253, 0.4);
          border-radius: 9999px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background-color: rgba(13, 110, 253, 0.6);
        }
      `}</style>
    </section>
  );
}

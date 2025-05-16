"use client";

import {
  Sparkles,
  Truck,
  CheckCircle,
  Repeat,
  Star,
} from "lucide-react";

const services = [
  {
    id: 1,
    name: "Wash & Fold",
    price: "$10",
    icon: <Sparkles className="w-6 h-6 text-blue-500" />,
  },
  {
    id: 2,
    name: "Dry Cleaning",
    price: "$15",
    icon: <CheckCircle className="w-6 h-6 text-green-500" />,
  },
  {
    id: 3,
    name: "Ironing",
    price: "$8",
    icon: <Repeat className="w-6 h-6 text-yellow-500" />,
  },
  {
    id: 4,
    name: "Pickup & Delivery",
    price: "$5",
    icon: <Truck className="w-6 h-6 text-purple-500" />,
  },
  {
    id: 5,
    name: "Premium Service",
    price: "$25",
    icon: <Star className="w-6 h-6 text-red-500" />,
  },
];

export default function Services() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Our Services
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {services.map(({ id, name, price, icon }) => (
          <div
            key={id}
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <div className="mb-2">{icon}</div>
            <h3 className="text-sm font-medium text-gray-900">{name}</h3>
            <p className="text-xs text-gray-500 mt-1">{price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Clock, ChevronRight } from 'lucide-react';
import Header from '../components/Header';

export default function Orders() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Dummy order data
  const orders = [
    {
      id: 'ORD001',
      date: '2025-05-20',
      service: 'Bulk Wash & Fold',
      status: 'Delivered',
      price: 48,
    },
    {
      id: 'ORD002',
      date: '2025-05-15',
      service: 'Commercial Dry Cleaning',
      status: 'In Progress',
      price: 60,
    },
    {
      id: 'ORD003',
      date: '2025-05-10',
      service: 'Express Home Wash',
      status: 'Pending',
      price: 40,
    },
    {
      id: 'ORD004',
      date: '2025-05-05',
      service: 'Delicate Dry Cleaning',
      status: 'Delivered',
      price: 75,
    },
  ];

  // Dummy summary data
  const summary = {
    totalOrders: orders.length,
    totalSpent: orders.reduce((total, order) => total + order.price, 0),
  };

  // Filter options
  const filters = ['All', 'Pending', 'In Progress', 'Delivered'];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pb-20 md:pb-0">
      <Header cart={[]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Orders Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Orders</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track your laundry orders and view their status in real-time.
          </p>
        </motion.div>

        {/* Summary Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white rounded-2xl shadow-lg p-6 mb-12 border border-gray-100 hover:border-blue-200 contain-content"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-gray-900">{summary.totalOrders}</p>
              <p className="text-gray-600">Total Orders</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">AED {summary.totalSpent}</p>
              <p className="text-gray-600">Total Spent</p>
            </div>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex bg-gray-100 p-1 rounded-full">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Orders List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden contain-content"
        >
          {orders.length === 0 ? (
            <p className="p-6 text-gray-600">No orders found.</p>
          ) : (
            <div className="divide-y divide-gray-100">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Package className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-900">{order.service}</p>
                        <p className="text-sm text-gray-600">Order #{order.id}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <p className="text-sm text-gray-600">{order.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4 sm:mt-0">
                    <p className="text-sm font-semibold text-gray-900">AED {order.price}</p>
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-600'
                          : order.status === 'In Progress'
                          ? 'bg-yellow-100 text-yellow-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {order.status}
                    </span>
                    <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-semibold">
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
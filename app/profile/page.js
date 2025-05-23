'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Package, Clock, Edit2, LogOut } from 'lucide-react';
import Header from '../components/Header';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  // Dummy user data
  const user = {
    name: 'Illyas Velleri',
    email: 'illyasvelleri@gmail.com',
    phone: '+971 50 123 4567',
    address: '123 Marina Bay, Dubai, UAE',
    avatar: '/images/avatar.jpg',
  };

  // Dummy order history
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
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pb-20 md:pb-0">
      <Header cart={[]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Profile</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manage your account details, view order history, and customize your preferences.
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100 hover:border-blue-200 contain-content"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-600">
              <Image
                src={user.avatar}
                alt="Profile Avatar"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAIuwO6N4Xh5gAAAABJRU5ErkJggg=="
                quality={75}
                onError={(e) => {
                  e.target.src = '/images/fallback.jpg';
                }}
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-blue-600" />
                  <input
                    type="text"
                    value={user.name}
                    disabled={!isEditing}
                    className={`w-full bg-transparent border-0 text-gray-900 ${isEditing ? 'border-b border-gray-300 focus:border-blue-600' : ''} outline-none`}
                    onChange={() => {}} // Dummy handler
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <input
                    type="email"
                    value={user.email}
                    disabled={!isEditing}
                    className={`w-full bg-transparent border-0 text-gray-900 ${isEditing ? 'border-b border-gray-300 focus:border-blue-600' : ''} outline-none`}
                    onChange={() => {}}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <input
                    type="tel"
                    value={user.phone}
                    disabled={!isEditing}
                    className={`w-full bg-transparent border-0 text-gray-900 ${isEditing ? 'border-b border-gray-300 focus:border-blue-600' : ''} outline-none`}
                    onChange={() => {}}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <input
                    type="text"
                    value={user.address}
                    disabled={!isEditing}
                    className={`w-full bg-transparent border-0 text-gray-900 ${isEditing ? 'border-b border-gray-300 focus:border-blue-600' : ''} outline-none`}
                    onChange={() => {}}
                  />
                </div>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="mt-6 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg"
              >
                <Edit2 className="w-4 h-4" />
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Order History */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Order History</h3>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden contain-content">
            {orders.length === 0 ? (
              <p className="p-6 text-gray-600">No orders yet.</p>
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
                            : 'bg-yellow-100 text-yellow-600'
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Account Settings */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Account Settings</h3>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 contain-content">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">Notifications</p>
                  <p className="text-sm text-gray-600">Receive order updates via email and SMS</p>
                </div>
                <input
                  type="checkbox"
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-600"
                  defaultChecked
                  onChange={() => {}}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">Promotional Offers</p>
                  <p className="text-sm text-gray-600">Get exclusive discounts and promotions</p>
                </div>
                <input
                  type="checkbox"
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-600"
                  defaultChecked
                  onChange={() => {}}
                />
              </div>
              <button className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg">
                <LogOut className="w-4 h-4" />
                Log Out
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
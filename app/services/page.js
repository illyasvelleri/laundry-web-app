'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Truck, Plus, Minus, Building, Home } from 'lucide-react';
import Header from '../components/Header';

export default function ServicesPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [selectedServices, setSelectedServices] = useState({});
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('commercial');

  // Animation for fade-in effect
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Set isClient to true on mount (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load cart from local storage on mount (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      const savedSelectedServices = localStorage.getItem('selectedServices');
      if (savedCart) setCart(JSON.parse(savedCart));
      if (savedSelectedServices) setSelectedServices(JSON.parse(savedSelectedServices));
    }
  }, []);

  // Save cart to local storage on update
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
      localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
    }
  }, [cart, selectedServices]);

  const services = {
    commercial: [
      {
        id: 1,
        name: 'Bulk Wash & Fold',
        price: 12,
        unit: 'per kg',
        img: '/images/dry-cleaning.jpg',
        description: 'High-capacity washing for hotels, hostels, and spas',
        turnaround: '24-48 hours',
      },
      {
        id: 2,
        name: 'Commercial Dry Cleaning',
        price: 20,
        unit: 'per piece',
        img: '/images/dry-cleaning.jpg',
        description: 'Premium cleaning for uniforms and linens',
        turnaround: '48-72 hours',
      },
      {
        id: 3,
        name: 'Express Bulk Wash',
        price: 18,
        unit: 'per kg',
        img: '/images/dry-cleaning.jpg',
        description: 'Fast cleaning for urgent business needs',
        turnaround: '12-24 hours',
      },
      {
        id: 4,
        name: 'Express Bulk Wash',
        price: 18,
        unit: 'per kg',
        img: '/images/dry-cleaning.jpg',
        description: 'Fast cleaning for urgent business needs',
        turnaround: '12-24 hours',
      },
      {
        id: 5,
        name: 'Express Bulk Wash',
        price: 18,
        unit: 'per kg',
        img: '/images/dry-cleaning.jpg',
        description: 'Fast cleaning for urgent business needs',
        turnaround: '12-24 hours',
      },
      {
        id: 6,
        name: 'Express Bulk Wash',
        price: 18,
        unit: 'per kg',
        img: '/images/dry-cleaning.jpg',
        description: 'Fast cleaning for urgent business needs',
        turnaround: '12-24 hours',
      },
    ],
    residential: [
      {
        id: 7,
        name: 'Home Wash & Fold',
        price: 15,
        unit: 'per kg',
        img: '/images/dry-cleaning.jpg',
        description: 'Convenient washing for household laundry',
        turnaround: '24-48 hours',
      },
      {
        id: 8,
        name: 'Delicate Dry Cleaning',
        price: 25,
        unit: 'per piece',
        img: '/images/dry-cleaning.jpg',
        description: 'Gentle cleaning for delicate home garments',
        turnaround: '48-72 hours',
      },
      {
        id: 9,
        name: 'Express Home Wash',
        price: 20,
        unit: 'per kg',
        img: '/images/dry-cleaning.jpg',
        description: 'Quick turnaround for busy households',
        turnaround: '12-24 hours',
      },
      {
        id: 10,
        name: 'Iron & Press',
        price: 8,
        unit: 'per piece',
        img: '/images/dry-cleaning.jpg',
        description: 'Professional ironing for crisp clothes',
        turnaround: '24 hours',
      },
      {
        id: 11,
        name: 'Bed Linen Cleaning',
        price: 30,
        unit: 'per set',
        img: '/images/dry-cleaning.jpg',
        description: 'Fresh and clean bed linens',
        turnaround: '48 hours',
      },
    ],
  };

  const addToCart = (service, quantity) => {
    if (quantity > 0) {
      const existingItem = cart.find(item => item.id === service.id);
      if (existingItem) {
        setCart(cart.map(item => 
          item.id === service.id 
            ? { ...item, quantity }
            : item
        ));
      } else {
        setCart([...cart, { ...service, quantity }]);
      }
    } else {
      setCart(cart.filter(item => item.id !== service.id));
    }
  };

  const updateQuantity = (serviceId, change) => {
    const currentQty = selectedServices[serviceId] || 0;
    const newQty = Math.max(0, currentQty + change);
    setSelectedServices({
      ...selectedServices,
      [serviceId]: newQty,
    });
    
    const service = [...services.commercial, ...services.residential].find(s => s.id === serviceId);
    if (service) {
      addToCart(service, newQty);
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {!isClient ? (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <Header cart={[]} />
        </div>
      ) : (
        <>
          <Header cart={cart} />
          
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                  Premium Laundry
                  <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Services in UAE
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Professional cleaning with free pickup and delivery for homes and businesses. Book in 3 clicks and let us handle the rest.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>Free Pickup & Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full">
                    <Clock className="w-4 h-4 text-yellow-500" />
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full">
                    <Truck className="w-4 h-4 text-green-600" />
                    <span>Same Day Service</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-center mb-12"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Tailored laundry solutions for commercial businesses and residential households. Add items to your cart and schedule pickup in minutes.
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
                    onClick={() => setActiveTab('commercial')}
                    className={`flex items-center px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                      activeTab === 'commercial'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    <Building size={18} className="mr-2" />
                    Commercial Services
                  </button>
                  <button
                    onClick={() => setActiveTab('residential')}
                    className={`flex items-center px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                      activeTab === 'residential'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    <Home size={18} className="mr-2" />
                    Home Services
                  </button>
                </div>
              </motion.div>

              {/* Services Grid */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services[activeTab].map((service) => (
                    <div
                      key={service.id}
                      className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 contain-content"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                          <Image
                            src={service.img}
                            alt={service.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAIuwO6N4Xh5gAAAABJRU5ErkJggg=="
                            quality={75}
                            priority={activeTab === 'commercial' && service.id === 1}
                            onError={(e) => {
                              e.target.src = '/images/fallback.jpg';
                            }}
                          />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">AED {service.price}</div>
                          <div className="text-sm text-gray-500">{service.unit}</div>
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h4>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{service.turnaround}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 bg-gray-50 rounded-full p-1">
                          <button
                            onClick={() => updateQuantity(service.id, -1)}
                            className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                            aria-label={`Decrease quantity for ${service.name}`}
                          >
                            <Minus className="w-4 h-4 text-gray-600" />
                          </button>
                          <span className="w-8 text-center font-semibold text-gray-900">
                            {selectedServices[service.id] || 0}
                          </span>
                          <button
                            onClick={() => updateQuantity(service.id, 1)}
                            className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                            aria-label={`Increase quantity for ${service.name}`}
                          >
                            <Plus className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                        
                        {(selectedServices[service.id] || 0) > 0 && (
                          <div className="text-sm font-semibold text-blue-600">
                            AED {(service.price * (selectedServices[service.id] || 0)).toFixed(0)}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Quick Book Section */}
          {isClient && getTotalItems() > 0 && (
            <div className="fixed bottom-6 left-6 right-6 z-50">
              <div className="max-w-md mx-auto bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <div className="font-semibold">{getTotalItems()} items in cart</div>
                    <div className="text-sm opacity-90">Total: AED {getTotalPrice()}</div>
                  </div>
                  <button
                    onClick={() => router.push('/cart')}
                    className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
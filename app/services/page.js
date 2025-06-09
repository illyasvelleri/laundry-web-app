// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Clock, Truck, Plus, Minus, Building, Home } from 'lucide-react';
// import Header from '../components/Header';

// export default function ServicesPage() {
//   const router = useRouter();
//   const [isClient, setIsClient] = useState(false);
//   const [selectedServices, setSelectedServices] = useState({});
//   const [cart, setCart] = useState([]);
//   const [activeTab, setActiveTab] = useState('commercial');

//   // Animation for fade-in effect
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   };

//   // Set isClient to true on mount (client-side only)
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // Load cart from local storage on mount (client-side only)
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const savedCart = localStorage.getItem('cart');
//       const savedSelectedServices = localStorage.getItem('selectedServices');
//       if (savedCart) setCart(JSON.parse(savedCart));
//       if (savedSelectedServices) setSelectedServices(JSON.parse(savedSelectedServices));
//     }
//   }, []);

//   // Save cart to local storage on update
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('cart', JSON.stringify(cart));
//       localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
//     }
//   }, [cart, selectedServices]);

//   const services = {
//     commercial: [
//       {
//         id: 1,
//         name: 'Bulk Wash & Fold',
//         price: 12,
//         unit: 'per kg',
//         img: '/images/dry-cleaning.jpg',
//         description: 'High-capacity washing for hotels, hostels, and spas',
//         turnaround: '24-48 hours',
//       },
//       {
//         id: 2,
//         name: 'Commercial Dry Cleaning',
//         price: 20,
//         unit: 'per piece',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Premium cleaning for uniforms and linens',
//         turnaround: '48-72 hours',
//       },
//       {
//         id: 3,
//         name: 'Express Bulk Wash',
//         price: 18,
//         unit: 'per kg',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Fast cleaning for urgent business needs',
//         turnaround: '12-24 hours',
//       },
//       {
//         id: 4,
//         name: 'Express Bulk Wash',
//         price: 18,
//         unit: 'per kg',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Fast cleaning for urgent business needs',
//         turnaround: '12-24 hours',
//       },
//       {
//         id: 5,
//         name: 'Express Bulk Wash',
//         price: 18,
//         unit: 'per kg',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Fast cleaning for urgent business needs',
//         turnaround: '12-24 hours',
//       },
//       {
//         id: 6,
//         name: 'Express Bulk Wash',
//         price: 18,
//         unit: 'per kg',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Fast cleaning for urgent business needs',
//         turnaround: '12-24 hours',
//       },
//     ],
//     residential: [
//       {
//         id: 7,
//         name: 'Home Wash & Fold',
//         price: 15,
//         unit: 'per kg',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Convenient washing for household laundry',
//         turnaround: '24-48 hours',
//       },
//       {
//         id: 8,
//         name: 'Delicate Dry Cleaning',
//         price: 25,
//         unit: 'per piece',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Gentle cleaning for delicate home garments',
//         turnaround: '48-72 hours',
//       },
//       {
//         id: 9,
//         name: 'Express Home Wash',
//         price: 20,
//         unit: 'per kg',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Quick turnaround for busy households',
//         turnaround: '12-24 hours',
//       },
//       {
//         id: 10,
//         name: 'Iron & Press',
//         price: 8,
//         unit: 'per piece',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Professional ironing for crisp clothes',
//         turnaround: '24 hours',
//       },
//       {
//         id: 11,
//         name: 'Bed Linen Cleaning',
//         price: 30,
//         unit: 'per set',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Fresh and clean bed linens',
//         turnaround: '48 hours',
//       },
//     ],
//   };

//   const addToCart = (service, quantity) => {
//     if (quantity > 0) {
//       const existingItem = cart.find(item => item.id === service.id);
//       if (existingItem) {
//         setCart(cart.map(item => 
//           item.id === service.id 
//             ? { ...item, quantity }
//             : item
//         ));
//       } else {
//         setCart([...cart, { ...service, quantity }]);
//       }
//     } else {
//       setCart(cart.filter(item => item.id !== service.id));
//     }
//   };

//   const updateQuantity = (serviceId, change) => {
//     const currentQty = selectedServices[serviceId] || 0;
//     const newQty = Math.max(0, currentQty + change);
//     setSelectedServices({
//       ...selectedServices,
//       [serviceId]: newQty,
//     });
    
//     const service = [...services.commercial, ...services.residential].find(s => s.id === serviceId);
//     if (service) {
//       addToCart(service, newQty);
//     }
//   };

//   const getTotalItems = () => {
//     return cart.reduce((total, item) => total + item.quantity, 0);
//   };

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
//       {!isClient ? (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
//           <Header cart={[]} />
//         </div>
//       ) : (
//         <>
//           <Header cart={cart} />
          
//           {/* Hero Section */}
//           <section className="relative py-20 overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
//             <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeIn}
//               >
//                 <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
//                   Premium Laundry
//                   <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//                     Services in UAE
//                   </span>
//                 </h2>
//                 <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//                   Professional cleaning with free pickup and delivery for homes and businesses. Book in 3 clicks and let us handle the rest.
//                 </p>
//                 <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
//                   <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full">
//                     <Clock className="w-4 h-4 text-blue-600" />
//                     <span>Free Pickup & Delivery</span>
//                   </div>
//                   <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full">
//                     <Clock className="w-4 h-4 text-yellow-500" />
//                     <span>4.9/5 Rating</span>
//                   </div>
//                   <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full">
//                     <Truck className="w-4 h-4 text-green-600" />
//                     <span>Same Day Service</span>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* Services Section */}
//           <section className="py-16">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeIn}
//                 className="text-center mb-12"
//               >
//                 <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h3>
//                 <p className="text-gray-600 max-w-2xl mx-auto">
//                   Tailored laundry solutions for commercial businesses and residential households. Add items to your cart and schedule pickup in minutes.
//                 </p>
//               </motion.div>

//               {/* Solution Tabs */}
//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeIn}
//                 className="flex justify-center mb-12"
//               >
//                 <div className="inline-flex bg-gray-100 p-1 rounded-full">
//                   <button
//                     onClick={() => setActiveTab('commercial')}
//                     className={`flex items-center px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
//                       activeTab === 'commercial'
//                         ? 'bg-blue-600 text-white shadow-md'
//                         : 'text-gray-700 hover:text-blue-600'
//                     }`}
//                   >
//                     <Building size={18} className="mr-2" />
//                     Commercial Services
//                   </button>
//                   <button
//                     onClick={() => setActiveTab('residential')}
//                     className={`flex items-center px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
//                       activeTab === 'residential'
//                         ? 'bg-blue-600 text-white shadow-md'
//                         : 'text-gray-700 hover:text-blue-600'
//                     }`}
//                   >
//                     <Home size={18} className="mr-2" />
//                     Home Services
//                   </button>
//                 </div>
//               </motion.div>

//               {/* Services Grid */}
//               <motion.div
//                 key={activeTab}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                   {services[activeTab].map((service) => (
//                     <div
//                       key={service.id}
//                       className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 contain-content"
//                     >
//                       <div className="flex items-center justify-between mb-4">
//                         <div className="relative w-16 h-16 rounded-lg overflow-hidden">
//                           <Image
//                             src={service.img}
//                             alt={service.name}
//                             fill
//                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                             className="object-cover group-hover:scale-105 transition-transform duration-300"
//                             placeholder="blur"
//                             blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAIuwO6N4Xh5gAAAABJRU5ErkJggg=="
//                             quality={75}
//                             priority={activeTab === 'commercial' && service.id === 1}
//                             onError={(e) => {
//                               e.target.src = '/Images/fallback.jpg';
//                             }}
//                           />
//                         </div>
//                         <div className="text-right">
//                           <div className="text-2xl font-bold text-gray-900">AED {service.price}</div>
//                           <div className="text-sm text-gray-500">{service.unit}</div>
//                         </div>
//                       </div>
                      
//                       <h4 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h4>
//                       <p className="text-gray-600 mb-4">{service.description}</p>
                      
//                       <div className="flex items-center justify-between mb-6">
//                         <div className="flex items-center space-x-1 text-sm text-gray-500">
//                           <Clock className="w-4 h-4" />
//                           <span>{service.turnaround}</span>
//                         </div>
//                       </div>

//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center space-x-3 bg-gray-50 rounded-full p-1">
//                           <button
//                             onClick={() => updateQuantity(service.id, -1)}
//                             className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
//                             aria-label={`Decrease quantity for ${service.name}`}
//                           >
//                             <Minus className="w-4 h-4 text-gray-600" />
//                           </button>
//                           <span className="w-8 text-center font-semibold text-gray-900">
//                             {selectedServices[service.id] || 0}
//                           </span>
//                           <button
//                             onClick={() => updateQuantity(service.id, 1)}
//                             className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
//                             aria-label={`Increase quantity for ${service.name}`}
//                           >
//                             <Plus className="w-4 h-4 text-gray-600" />
//                           </button>
//                         </div>
                        
//                         {(selectedServices[service.id] || 0) > 0 && (
//                           <div className="text-sm font-semibold text-blue-600">
//                             AED {(service.price * (selectedServices[service.id] || 0)).toFixed(0)}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* Quick Book Section */}
//           {isClient && getTotalItems() > 0 && (
//             <div className="fixed bottom-6 left-6 right-6 z-50">
//               <div className="max-w-md mx-auto bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-4 shadow-2xl">
//                 <div className="flex items-center justify-between text-white">
//                   <div>
//                     <div className="font-semibold">{getTotalItems()} items in cart</div>
//                     <div className="text-sm opacity-90">Total: AED {getTotalPrice()}</div>
//                   </div>
//                   <button
//                     onClick={() => router.push('/cart')}
//                     className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }
"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Home, CheckCircle, Truck, ShoppingCart, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import Header from '../components/Header';

// Animation variants
const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  },
  slideIn: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } }
  },
  float: {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  pulse: {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }
};

export default function ServicesPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedServices, setSelectedServices] = useState({});
  const [activeTab, setActiveTab] = useState('commercial');
  const [userPoints, setUserPoints] = useState(0);
  const carouselSlides = [
    {
      title: 'Premium Laundry',
      subtitle: 'Services in UAE',
      description: 'Professional cleaning with free pickup and delivery across all Emirates.',
      image: '/images/dry-cleaning.jpg',
      badge: 'Most Popular',
      stats: { customers: '10,000+', rating: '4.9' }
    },
    {
      title: 'Lightning Fast',
      subtitle: 'Same Day Service',
      description: 'Get your laundry done in record time with our express delivery options.',
      image: '/images/dry-cleaning.jpg',
      badge: 'Express',
      stats: { delivery: '2-4 Hours', satisfaction: '99%' }
    },
    {
      title: 'Eco-Friendly',
      subtitle: 'Sustainable Cleaning',
      description: 'Green detergents and energy-efficient processes for a cleaner planet.',
      image: '/images/dry-cleaning.jpg',
      badge: 'Eco-Certified',
      stats: { co2Saved: '500kg', greenProducts: '100%' }
    },
  ];
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselSlides.length]);

  useEffect(() => {
    setIsClient(true);
    const savedCart = localStorage.getItem('cart');
    const savedSelectedServices = localStorage.getItem('selectedServices');
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedSelectedServices) setSelectedServices(JSON.parse(savedSelectedServices));

    const fetchUserPoints = async () => {
      try {
        const response = await fetch('/api/user/points', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        if (response.ok) {
          const { points } = await response.json();
          setUserPoints(points);
        }
      } catch (error) {
        console.error('Error fetching points:', error);
      }
    };
    fetchUserPoints();
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('cart', JSON.stringify(cart));
      localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
    }
  }, [cart, selectedServices, isClient]);

  const services = {
    commercial: [
      { id: 1, name: 'Bulk Wash & Fold', price: 12, originalPrice: 18, unit: 'per kg', img: '/images/dry-cleaning.jpg' },
      { id: 2, name: 'Commercial Dry Cleaning', price: 20, originalPrice: 28, unit: 'per piece', img: '/images/dry-cleaning.jpg' },
      { id: 3, name: 'Express Bulk Wash', price: 10, originalPrice: 15, unit: 'per kg', img: '/images/dry-cleaning.jpg' },
    ],
    residential: [
      { id: 7, name: 'Home Wash & Fold', price: 15, originalPrice: 22, unit: 'per kg', img: '/images/dry-cleaning.jpg' },
      { id: 8, name: 'Delicate Dry Cleaning', price: 25, originalPrice: 35, unit: 'per piece', img: '/images/dry-cleaning.jpg' },
      { id: 9, name: 'Express Home Wash', price: 20, originalPrice: 28, unit: 'per kg', img: '/images/dry-cleaning.jpg' },
      { id: 10, name: 'Iron & Press', price: 8, originalPrice: 12, unit: 'per piece', img: '/images/dry-cleaning.jpg' },
      { id: 11, name: 'Bed Linen Cleaning', price: 30, originalPrice: 42, unit: 'per set', img: '/images/dry-cleaning.jpg' },
    ],
  };

  const addToCart = (service) => {
    const isSelected = selectedServices[service.id];
    if (!isSelected) {
      setCart([...cart, { ...service }]);
      setSelectedServices({ ...selectedServices, [service.id]: true });
    } else {
      setCart(cart.filter(item => item.id !== service.id));
      setSelectedServices({ ...selectedServices, [service.id]: false });
    }
  };

  const getTotalItems = () => cart.length;

  const getDiscountPercentage = (originalPrice, price) =>
    Math.round(((originalPrice - price) / originalPrice) * 100);

  const handleBookNow = () => {
    if (getTotalItems() > 0) {
      router.push('/pickup');
    } else {
      alert('Please select at least one service.');
    }
  };

  const formatCurrency = (amount) => `AED ${amount}`;

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
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
          {/* Enhanced Hero Section */}
          <section className="relative py-8 sm:py-12 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
              <motion.div 
                className="absolute top-20 left-20 w-4 h-4 bg-blue-500 rounded-full"
                variants={ANIMATION_VARIANTS.float}
                animate="animate"
              />
              <motion.div 
                className="absolute top-40 right-32 w-3 h-3 bg-cyan-500 rounded-full"
                variants={ANIMATION_VARIANTS.float}
                animate="animate"
                style={{ animationDelay: '2s' }}
              />
              <motion.div 
                className="absolute bottom-32 left-1/4 w-2 h-2 bg-purple-500 rounded-full"
                variants={ANIMATION_VARIANTS.float}
                animate="animate"
                style={{ animationDelay: '4s' }}
              />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Enhanced Carousel */}
              <div className="relative w-full h-[50vh] sm:h-[600px] rounded-3xl overflow-hidden shadow-2xl mb-8">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={carouselIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={carouselSlides[carouselIndex].image}
                      alt={carouselSlides[carouselIndex].title}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      quality={90}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAIuwO6N4Xh5g=="
                      onError={(e) => { e.target.src = '/images/fallback.jpg'; }}
                    />
                    
                    {/* Enhanced Overlay with Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
                    
                    {/* Content Container */}
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                          {/* Left Content */}
                          <div className="text-white space-y-6">
                            {/* Badge */}
                            <motion.div
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              className="inline-flex items-center"
                            >
                              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg">
                                <Sparkles className="w-4 h-4 inline mr-2" />
                                {carouselSlides[carouselIndex].badge}
                              </div>
                            </motion.div>

                            {/* Title */}
                            <motion.div
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                                {carouselSlides[carouselIndex].title}
                                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                                  {carouselSlides[carouselIndex].subtitle}
                                </span>
                              </h1>
                            </motion.div>

                            {/* Description */}
                            <motion.p
                              initial={{ opacity: 0, x: -30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 }}
                              className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-lg"
                            >
                              {carouselSlides[carouselIndex].description}
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 }}
                              className="flex flex-col sm:flex-row gap-4"
                            >
                              <button
                                onClick={() => router.push('/pickup')}
                                className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                              >
                                Book Now - Free Pickup
                                <Truck className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform" />
                              </button>
                            </motion.div>
                          </div>

                          {/* Right Stats Card */}
                          <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="hidden lg:block"
                          >
                            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                              <h3 className="text-white text-xl font-bold mb-6">Why Choose Us?</h3>
                              <div className="space-y-4">
                                {Object.entries(carouselSlides[carouselIndex].stats).map(([key, value], idx) => (
                                  <div key={key} className="flex items-center justify-between">
                                    <span className="text-white/80 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                                    <span className="text-white font-bold text-lg">{value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 group"
                >
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 group"
                >
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Enhanced Navigation Dots */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
                  {carouselSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCarouselIndex(index);
                        setIsAutoPlaying(false);
                        setTimeout(() => setIsAutoPlaying(true), 10000);
                      }}
                      className={`transition-all duration-300 ${
                        carouselIndex === index 
                          ? 'w-8 h-3 bg-white rounded-full' 
                          : 'w-3 h-3 bg-white/50 hover:bg-white/80 rounded-full'
                      }`}
                    />
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-400 to-cyan-400"
                    initial={{ width: "0%" }}
                    animate={{ width: isAutoPlaying ? "100%" : "0%" }}
                    transition={{ duration: isAutoPlaying ? 6 : 0, ease: "linear" }}
                    key={carouselIndex}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 pb-32 mb-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.fadeIn}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Our Services
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                  Tailored laundry solutions for commercial businesses and residential households. Select services and schedule your pickup.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.scale}
                className="flex justify-center mb-12"
              >
                <div className="inline-flex bg-gray-100 p-1 rounded-2xl shadow-sm">
                  <button
                    onClick={() => setActiveTab('commercial')}
                    className={`flex items-center px-6 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 ${
                      activeTab === 'commercial'
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-white/50'
                    }`}
                  >
                    <Building size={18} className="mr-2" />
                    Commercial Services
                  </button>
                  <button
                    onClick={() => setActiveTab('residential')}
                    className={`flex items-center px-6 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 ${
                      activeTab === 'residential'
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-white/50'
                    }`}
                  >
                    <Home size={18} className="mr-2" />
                    Home Services
                  </button>
                </div>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services[activeTab].map((service) => (
                      <motion.div
                        key={service.id}
                        layout
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => addToCart(service)}
                        className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 ${
                          selectedServices[service.id]
                            ? 'border-blue-500 bg-blue-50 shadow-blue-200'
                            : 'border-gray-100 hover:border-blue-200'
                        }`}
                      >
                        {/* Popular badge */}
                        {(service.id === 1 || service.id === 8) && (
                          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            Popular
                          </div>
                        )}
                        {/* Service image */}
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden mb-4">
                          <Image
                            src={service.img}
                            alt={service.name}
                            fill
                            sizes="80px"
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAIuwO6N4Xh5g=="
                            quality={75}
                            priority={activeTab === 'commercial' && service.id === 1}
                            onError={(e) => { e.target.src = '/images/fallback.jpg'; }}
                          />
                        </div>
                        {/* Pricing */}
                        <div className="absolute top-6 right-6 text-right">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm text-gray-400 line-through">
                              {formatCurrency(service.originalPrice)}
                            </span>
                            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                              {getDiscountPercentage(service.originalPrice, service.price)}% OFF
                            </span>
                          </div>
                          <div className="text-xl font-bold text-green-600">
                            {formatCurrency(service.price)}
                          </div>
                          <div className="text-xs text-gray-500">{service.unit}</div>
                        </div>
                        {/* Service details */}
                        <div className="pr-40">
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">
                            {service.name}
                          </h4>
                          <p className="text-sm text-gray-600 mb-3">
                            {activeTab === 'commercial' ? 'High-capacity cleaning for businesses.' : 'Convenient cleaning for households.'}
                          </p>
                          <ul className="text-xs text-gray-500 space-y-1">
                            <li className="flex items-center">
                              <CheckCircle className="w-3 h-3 text-blue-500 mr-1 flex-shrink-0" />
                              Quality guarantee
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="w-3 h-3 text-blue-500 mr-1 flex-shrink-0" />
                              Fast delivery
                            </li>
                          </ul>
                        </div>
                        {/* Selection indicator */}
                        <div className="absolute bottom-6 right-6">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            selectedServices[service.id]
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-300 group-hover:border-blue-400'
                          }`}>
                            {selectedServices[service.id] && <CheckCircle className="w-4 h-4 text-white" />}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* Cart Summary */}
          <AnimatePresence>
            {getTotalItems() > 0 && (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed bottom-28 m-4 left-0 right-0 z-50"
              >
                <div className="max-w-md mx-auto bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-4 shadow-2xl backdrop-blur-lg">
                  <div className="flex items-center justify-between text-white mb-3">
                    <div className="flex items-center">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      <span className="font-medium">
                        {getTotalItems()} service{getTotalItems() !== 1 ? 's' : ''} selected
                      </span>
                    </div>
                    <div className="text-sm opacity-90">
                      Total: {formatCurrency(cart.reduce((sum, item) => sum + item.price, 0))}
                    </div>
                  </div>
                  <button
                    onClick={handleBookNow}
                    className="w-full bg-white text-blue-600 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                  >
                    Book Now - Schedule Pickup
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Clock, Truck, Building, Home, CheckCircle } from 'lucide-react';
// import Header from '../components/Header';

// export default function ServicesPage() {
//   const router = useRouter();
//   const [isClient, setIsClient] = useState(false);
//   const [selectedServices, setSelectedServices] = useState({});
//   const [cart, setCart] = useState([]);
//   const [activeTab, setActiveTab] = useState('commercial');
//   const [userPoints, setUserPoints] = useState(0);

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   };

//   useEffect(() => {
//     setIsClient(true);
//     const savedCart = localStorage.getItem('cart');
//     const savedSelectedServices = localStorage.getItem('selectedServices');
//     if (savedCart) setCart(JSON.parse(savedCart));
//     if (savedSelectedServices) setSelectedServices(JSON.parse(savedSelectedServices));

//     // Fetch user points
//     const fetchUserPoints = async () => {
//       try {
//         const response = await fetch('/api/user/points', {
//           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//         });
//         if (response.ok) {
//           const { points } = await response.json();
//           setUserPoints(points);
//         }
//       } catch (error) {
//         console.error('Error fetching points:', error);
//       }
//     };
//     fetchUserPoints();
//   }, []);

//   useEffect(() => {
//     if (isClient) {
//       localStorage.setItem('cart', JSON.stringify(cart));
//       localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
//     }
//   }, [cart, selectedServices, isClient]);

//   const services = {
//     commercial: [
//       {
//         id: 1,
//         name: 'Bulk Wash & Fold',
//         price: 12,
//         unit: 'per kg',
//         img: '/images/dry-cleaning.jpg',
//         description: 'High-capacity washing for hotels, hostels, and spas.',
//         turnaround: '24-48 hours',
//       },
//       {
//         id: 2,
//         name: 'Commercial Dry Cleaning',
//         price: 20,
//         unit: 'per piece',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Premium cleaning for uniforms and linens.',
//         turnaround: '48-72 hours',
//       },
//       {
//         id: 3,
//         name: 'Express Bulk Wash',
//         price: 10,
//         unit: 'per kg',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Fast cleaning for urgent business needs.',
//         turnaround: '12-24 hours',
//       },
//     ],
//     residential: [
//       {
//         id: 7,
//         name: 'Home Wash & Fold',
//         price: 15,
//         unit: 'per kg',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Convenient washing for household laundry.',
//         turnaround: '24-48 hours',
//       },
//       {
//         id: 8,
//         name: 'Delicate Dry Cleaning',
//         price: 25,
//         unit: 'per piece',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Gentle cleaning for delicate home garments.',
//         turnaround: '48-72 hours',
//       },
//       {
//         id: 9,
//         name: 'Express Home Wash',
//         price: 20,
//         unit: 'per kg',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Quick turnaround for busy households.',
//         turnaround: '12-24 hours',
//       },
//       {
//         id: 10,
//         name: 'Iron & Press',
//         price: 8,
//         unit: 'per piece',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Professional ironing for crisp clothes.',
//         turnaround: '24 hours',
//       },
//       {
//         id: 11,
//         name: 'Bed Linen Cleaning',
//         price: 30,
//         unit: 'per set',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Fresh and clean bed linens.',
//         turnaround: '48 hours',
//       },
//     ],
//   };

//   const addToCart = (service) => {
//     const isSelected = selectedServices[service.id];
//     if (!isSelected) {
//       setCart([...cart, { ...service }]);
//       setSelectedServices({ ...selectedServices, [service.id]: true });
//     } else {
//       setCart(cart.filter(item => item.id !== service.id));
//       setSelectedServices({ ...selectedServices, [service.id]: false });
//     }
//   };

//   const getTotalItems = () => {
//     return cart.length;
//   };

//   const handleBookNow = () => {
//     if (getTotalItems() > 0) {
//       router.push('/pickup');
//     } else {
//       alert('Please select at least one service.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
//       {!isClient ? (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
//           <Header cart={[]} />
//         </div>
//       ) : (
//         <>
//           <Header cart={cart} />
          
//           <section className="relative py-20 overflow-hidden pb-20 md:pb-4">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
//             <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeIn}
//               >
//                 <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
//                   Premium Laundry
//                   <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//                     Services in UAE
//                   </span>
//                 </h2>
//                 <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//                   Professional cleaning with free pickup and delivery for homes and businesses. Select services and schedule your pickup.
//                 </p>
//                 <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
//                   <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full">
//                     <Clock className="w-4 h-4 text-blue-600" />
//                     <span>Free Pickup & Delivery</span>
//                   </div>
//                   <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full">
//                     <Clock className="w-4 h-4 text-yellow-500" />
//                     <span>4.9/5 Rating</span>
//                   </div>
//                   <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full">
//                     <Truck className="w-4 h-4 text-green-600" />
//                     <span>Same Day Service</span>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           <section className="py-16 pb-20 md:pb-36">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeIn}
//                 className="text-center mb-12"
//               >
//                 <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h3>
//                 <p className="text-gray-600 max-w-2xl mx-auto">
//                   Tailored laundry solutions for commercial businesses and residential households. Click to select services and schedule your pickup.
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeIn}
//                 className="flex justify-center mb-12"
//               >
//                 <div className="inline-flex bg-gray-100 p-1 rounded-full">
//                   <button
//                     onClick={() => setActiveTab('commercial')}
//                     className={`flex items-center px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
//                       activeTab === 'commercial'
//                         ? 'bg-blue-600 text-white shadow-md'
//                         : 'text-gray-700 hover:text-blue-600'
//                     }`}
//                   >
//                     <Building size={18} className="mr-2" />
//                     Commercial Services
//                   </button>
//                   <button
//                     onClick={() => setActiveTab('residential')}
//                     className={`flex items-center px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
//                       activeTab === 'residential'
//                         ? 'bg-blue-600 text-white shadow-md'
//                         : 'text-gray-700 hover:text-blue-600'
//                     }`}
//                   >
//                     <Home size={18} className="mr-2" />
//                     Home Services
//                   </button>
//                 </div>
//               </motion.div>

//               <motion.div
//                 key={activeTab}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                   {services[activeTab].map((service) => (
//                     <div
//                       key={service.id}
//                       onClick={() => addToCart(service)}
//                       className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border cursor-pointer ${
//                         selectedServices[service.id]
//                           ? 'border-blue-500 bg-blue-50'
//                           : 'border-gray-100 hover:border-blue-200'
//                       } contain-content`}
//                     >
//                       <div className="flex items-center justify-between mb-4">
//                         <div className="relative w-16 h-16 rounded-lg overflow-hidden">
//                           <Image
//                             src={service.img}
//                             alt={service.name}
//                             fill
//                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                             className="object-cover group-hover:scale-105 transition-transform duration-300"
//                             placeholder="blur"
//                             blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAIuwO6N4Xh5gAAAABJRU5ErkJggg=="
//                             quality={75}
//                             priority={activeTab === 'commercial' && service.id === 1}
//                             onError={(e) => {
//                               e.target.src = '/images/fallback.jpg';
//                             }}
//                           />
//                         </div>
//                         <div className="text-right">
//                           <div className="text-2xl font-bold text-gray-900">AED {service.price}</div>
//                           <div className="text-sm text-gray-500">{service.unit}</div>
//                         </div>
//                       </div>
                      
//                       <h4 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h4>
//                       <p className="text-gray-600 mb-4">{service.description}</p>
                      
//                       <div className="flex items-center justify-between mb-6">
//                         <div className="flex items-center space-x-1 text-sm text-gray-500">
//                           <Clock className="w-4 h-4" />
//                           <span>{service.turnaround}</span>
//                         </div>
//                         {selectedServices[service.id] && (
//                           <CheckCircle className="w-5 h-5 text-blue-600" />
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {isClient && (
//             <div className="fixed bottom-6 left-6 right-6 z-50">
//               <div className="max-w-md mx-auto bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-4 shadow-2xl">
//                 <div className="flex justify-center">
//                   <button
//                     onClick={handleBookNow}
//                     className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }







// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Clock, Truck, Plus, Minus, Building, Home } from 'lucide-react';
// import Header from '../components/Header';

// export default function ServicesPage() {
//   const router = useRouter();
//   const [isClient, setIsClient] = useState(false);
//   const [selectedServices, setSelectedServices] = useState({});
//   const [cart, setCart] = useState([]);
//   const [activeTab, setActiveTab] = useState('commercial');

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   };

//   useEffect(() => {
//     setIsClient(true);
//     const savedCart = localStorage.getItem('cart');
//     const savedSelectedServices = localStorage.getItem('selectedServices');
//     if (savedCart) setCart(JSON.parse(savedCart));
//     if (savedSelectedServices) setSelectedServices(JSON.parse(savedSelectedServices));
//   }, []);

//   useEffect(() => {
//     if (isClient) {
//       localStorage.setItem('cart', JSON.stringify(cart));
//       localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
//     }
//   }, [cart, selectedServices, isClient]);

//   const services = {
//     commercial: [
//       {
//         id: 1,
//         name: 'Bulk Wash & Fold',
//         price: 12,
//         unit: 'per kg',
//         img: '/images/dry-cleaning.jpg',
//         description: 'High-capacity washing for hotels, hostels, and spas',
//         turnaround: '24-48 hours',
//       },
//       {
//         id: 2,
//         name: 'Commercial Dry Cleaning',
//         price: 20,
//         unit: 'per piece',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Premium cleaning for uniforms and linens',
//         turnaround: '48-72 hours',
//       },
//       {
//         id: 3,
//         name: 'Express Bulk Wash',
//         price: 18,
//         unit: 'per kg',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Fast cleaning for urgent business needs',
//         turnaround: '12-24 hours',
//       },
//       {
//         id: 4,
//         name: 'Express Bulk Wash',
//         price: 18,
//         unit: 'per kg',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Fast cleaning for urgent business needs',
//         turnaround: '12-24 hours',
//       },
//       {
//         id: 5,
//         name: 'Express Bulk Wash',
//         price: 18,
//         unit: 'per kg',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Fast cleaning for urgent business needs',
//         turnaround: '12-24 hours',
//       },
//       {
//         id: 6,
//         name: 'Express Bulk Wash',
//         price: 18,
//         unit: 'per kg',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Fast cleaning for urgent business needs',
//         turnaround: '12-24 hours',
//       },
//     ],
//     residential: [
//       {
//         id: 7,
//         name: 'Home Wash & Fold',
//         price: 15,
//         unit: 'per kg',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Convenient washing for household laundry',
//         turnaround: '24-48 hours',
//       },
//       {
//         id: 8,
//         name: 'Delicate Dry Cleaning',
//         price: 25,
//         unit: 'per piece',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Gentle cleaning for delicate home garments',
//         turnaround: '48-72 hours',
//       },
//       {
//         id: 9,
//         name: 'Express Home Wash',
//         price: 20,
//         unit: 'per kg',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Quick turnaround for busy households',
//         turnaround: '12-24 hours',
//       },
//       {
//         id: 10,
//         name: 'Iron & Press',
//         price: 8,
//         unit: 'per piece',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Professional ironing for crisp clothes',
//         turnaround: '24 hours',
//       },
//       {
//         id: 11,
//         name: 'Bed Linen Cleaning',
//         price: 30,
//         unit: 'per set',
//         img: '/images/dry-cleaning.jpg',
//         description: 'Fresh and clean bed linens',
//         turnaround: '48 hours',
//       },
//     ],
//   };

//   const addToCart = (service, quantity) => {
//     if (quantity > 0) {
//       const existingItem = cart.find(item => item.id === service.id);
//       if (existingItem) {
//         setCart(cart.map(item => 
//           item.id === service.id 
//             ? { ...item, quantity }
//             : item
//         ));
//       } else {
//         setCart([...cart, { ...service, quantity }]);
//       }
//     } else {
//       setCart(cart.filter(item => item.id !== service.id));
//     }
//   };

//   const updateQuantity = (serviceId, change) => {
//     const currentQty = selectedServices[serviceId] || 0;
//     const newQty = Math.max(0, currentQty + change);
//     setSelectedServices({
//       ...selectedServices,
//       [serviceId]: newQty,
//     });
    
//     const service = [...services.commercial, ...services.residential].find(s => s.id === serviceId);
//     if (service) {
//       addToCart(service, newQty);
//     }
//   };

//   const getTotalItems = () => {
//     return cart.reduce((total, item) => total + item.quantity, 0);
//   };

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
//       {!isClient ? (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
//           <Header cart={[]} />
//         </div>
//       ) : (
//         <>
//           <Header cart={cart} />
          
//           <section className="relative py-20 overflow-hidden pb-20 md:pb-4">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
//             <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeIn}
//               >
//                 <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
//                   Premium Laundry
//                   <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//                     Services in UAE
//                   </span>
//                 </h2>
//                 <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//                   Professional cleaning with free pickup and delivery for homes and businesses. Book in 3 clicks and let us handle the rest.
//                 </p>
//                 <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
//                   <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full">
//                     <Clock className="w-4 h-4 text-blue-600" />
//                     <span>Free Pickup & Delivery</span>
//                   </div>
//                   <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full">
//                     <Clock className="w-4 h-4 text-yellow-500" />
//                     <span>4.9/5 Rating</span>
//                   </div>
//                   <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full">
//                     <Truck className="w-4 h-4 text-green-600" />
//                     <span>Same Day Service</span>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           <section className="py-16 pb-20 md:pb-0">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeIn}
//                 className="text-center mb-12"
//               >
//                 <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h3>
//                 <p className="text-gray-600 max-w-2xl mx-auto">
//                   Tailored laundry solutions for commercial businesses and residential households. Add items to your cart and schedule pickup in minutes.
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeIn}
//                 className="flex justify-center mb-12"
//               >
//                 <div className="inline-flex bg-gray-100 p-1 rounded-full">
//                   <button
//                     onClick={() => setActiveTab('commercial')}
//                     className={`flex items-center px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
//                       activeTab === 'commercial'
//                         ? 'bg-blue-600 text-white shadow-md'
//                         : 'text-gray-700 hover:text-blue-600'
//                     }`}
//                   >
//                     <Building size={18} className="mr-2" />
//                     Commercial Services
//                   </button>
//                   <button
//                     onClick={() => setActiveTab('residential')}
//                     className={`flex items-center px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
//                       activeTab === 'residential'
//                         ? 'bg-blue-600 text-white shadow-md'
//                         : 'text-gray-700 hover:text-blue-600'
//                     }`}
//                   >
//                     <Home size={18} className="mr-2" />
//                     Home Services
//                   </button>
//                 </div>
//               </motion.div>

//               <motion.div
//                 key={activeTab}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                   {services[activeTab].map((service) => (
//                     <div
//                       key={service.id}
//                       className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 contain-content"
//                     >
//                       <div className="flex items-center justify-between mb-4">
//                         <div className="relative w-16 h-16 rounded-lg overflow-hidden">
//                           <Image
//                             src={service.img}
//                             alt={service.name}
//                             fill
//                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                             className="object-cover group-hover:scale-105 transition-transform duration-300"
//                             placeholder="blur"
//                             blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAIuwO6N4Xh5gAAAABJRU5ErkJggg=="
//                             quality={75}
//                             priority={activeTab === 'commercial' && service.id === 1}
//                             onError={(e) => {
//                               e.target.src = '/images/fallback.jpg';
//                             }}
//                           />
//                         </div>
//                         <div className="text-right">
//                           <div className="text-2xl font-bold text-gray-900">AED {service.price}</div>
//                           <div className="text-sm text-gray-500">{service.unit}</div>
//                         </div>
//                       </div>
                      
//                       <h4 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h4>
//                       <p className="text-gray-600 mb-4">{service.description}</p>
                      
//                       <div className="flex items-center justify-between mb-6">
//                         <div className="flex items-center space-x-1 text-sm text-gray-500">
//                           <Clock className="w-4 h-4" />
//                           <span>{service.turnaround}</span>
//                         </div>
//                       </div>

//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center space-x-3 bg-gray-50 rounded-full p-1">
//                           <button
//                             onClick={() => updateQuantity(service.id, -1)}
//                             className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
//                             aria-label={`Decrease quantity for ${service.name}`}
//                           >
//                             <Minus className="w-4 h-4 text-gray-600" />
//                           </button>
//                           <span className="w-8 text-center font-semibold text-gray-900">
//                             {selectedServices[service.id] || 0}
//                           </span>
//                           <button
//                             onClick={() => updateQuantity(service.id, 1)}
//                             className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
//                             aria-label={`Increase quantity for ${service.name}`}
//                           >
//                             <Plus className="w-4 h-4 text-gray-600" />
//                           </button>
//                         </div>
                        
//                         {(selectedServices[service.id] || 0) > 0 && (
//                           <div className="text-sm font-semibold text-blue-600">
//                             AED {(service.price * (selectedServices[service.id] || 0)).toFixed(0)}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {isClient && getTotalItems() > 0 && (
//             <div className="fixed bottom-6 left-6 right-6 z-150">
//               <div className="max-w-md mx-auto bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-4 shadow-2xl">
//                 <div className="flex items-center justify-between text-white">
//                   <div>
//                     <div className="font-semibold">{getTotalItems()} items in cart</div>
//                     <div className="text-sm opacity-90">Total: AED {getTotalPrice()}</div>
//                   </div>
//                   <button
//                     onClick={() => router.push('/cart')}
//                     className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }
// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import dynamic from 'next/dynamic';

// // Dynamically import lucide-react icons
// const lucideIcons = dynamic(() => import('lucide-react').then(mod => ({
//   ShoppingCart: mod.ShoppingCart,
//   Calendar: mod.Calendar,
//   Clock: mod.Clock,
//   MapPin: mod.MapPin,
//   Phone: mod.Phone,
//   Truck: mod.Truck,
// })), { ssr: false });

// export default function CartPage() {
//   const router = useRouter();
//   const [isClient, setIsClient] = useState(false);
//   const [cart, setCart] = useState([]);
//   const [selectedServices, setSelectedServices] = useState({});
//   const [pickupDate, setPickupDate] = useState('');
//   const [pickupTime, setPickupTime] = useState('');
//   const [address, setAddress] = useState('');
//   const [phone, setPhone] = useState('');

//   // Set isClient on mount
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // Load cart from localStorage client-side
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const savedCart = localStorage.getItem('cart');
//       const savedSelectedServices = localStorage.getItem('selectedServices');
//       setCart(savedCart ? JSON.parse(savedCart) : []);
//       setSelectedServices(savedSelectedServices ? JSON.parse(savedSelectedServices) : {});
//     }
//   }, []);

//   // Save cart to localStorage
//   useEffect(() => {
//     if (isClient && typeof window !== 'undefined') {
//       localStorage.setItem('cart', JSON.stringify(cart));
//       localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
//     }
//   }, [cart, selectedServices, isClient]);

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
//   };

//   const getTotalItems = () => {
//     return cart.reduce((total, item) => total + item.quantity, 0);
//   };

//   const handleBooking = () => {
//     if (cart.length > 0 && pickupDate && pickupTime && address && phone) {
//       alert(`Booking confirmed! We'll pick up your laundry on ${pickupDate} at ${pickupTime}. Total: AED ${getTotalPrice()}`);
//       setCart([]);
//       setSelectedServices({});
//       if (typeof window !== 'undefined') {
//         localStorage.setItem('cart', JSON.stringify([]));
//         localStorage.setItem('selectedServices', JSON.stringify({}));
//       }
//       router.push('/services');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
//       {!isClient ? (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
//           <header className="bg-white/90 border-b border-gray-100 shadow-sm">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="flex justify-between items-center h-16">
//                 <h1 className="text-xl font-bold text-gray-900">Your Cart</h1>
//               </div>
//             </div>
//           </header>
//         </div>
//       ) : (
//         <>
//           <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm contain-paint">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="flex justify-between items-center h-16">
//                 <button
//                   onClick={() => router.push('/services')}
//                   className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//                   </svg>
//                   <span>Back to Services</span>
//                 </button>
                
//                 <h1 className="text-xl font-bold text-gray-900">Your Cart</h1>
                
//                 <div className="w-20"></div>
//               </div>
//             </div>
//           </header>

//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               <div className="space-y-6">
//                 <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>
                
//                 {cart.length === 0 ? (
//                   <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
//                     {lucideIcons.ShoppingCart && <lucideIcons.ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />}
//                     <p className="text-gray-500">Your cart is empty</p>
//                   </div>
//                 ) : (
//                   <div className="space-y-4">
//                     {cart.map((item) => (
//                       <div key={item.id} className="bg-white rounded-xl p-4 shadow-md border border-gray-100 contain-content">
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center space-x-3">
//                             <div className="relative w-12 h-12 rounded-lg overflow-hidden">
//                               <Image
//                                 src={item.img || '/images/fallback.jpg'}
//                                 alt={item.name}
//                                 fill
//                                 sizes="48px"
//                                 className="object-cover"
//                                 placeholder="blur"
//                                 blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAIuwO6N4Xh5gAAAABJRU5ErkJggg=="
//                                 quality={75}
//                                 onError={(e) => {
//                                   e.target.src = '/images/fallback.jpg';
//                                 }}
//                               />
//                             </div>
//                             <div>
//                               <h4 className="font-semibold text-gray-900">{item.name}</h4>
//                               <p className="text-sm text-gray-500">AED {item.price} {item.unit}</p>
//                             </div>
//                           </div>
//                           <div className="text-right">
//                             <div className="font-semibold text-gray-900">× {item.quantity}</div>
//                             <div className="text-sm text-blue-600">AED {(item.price * item.quantity).toFixed(0)}</div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
                    
//                     <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-200">
//                       <div className="flex justify-between items-center">
//                         <span className="text-lg font-semibold text-gray-900">Total</span>
//                         <span className="text-2xl font-bold text-blue-600">AED {getTotalPrice()}</span>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <div className="space-y-6">
//                 <h2 className="text-2xl font-bold text-gray-900">Schedule Pickup</h2>
                
//                 <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       {lucideIcons.Calendar && <lucideIcons.Calendar className="w-4 h-4 inline mr-2" />}
//                       Pickup Date
//                     </label>
//                     <input
//                       type="date"
//                       value={pickupDate}
//                       onChange={(e) => setPickupDate(e.target.value)}
//                       min={new Date().toISOString().split('T')[0]}
//                       className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       {lucideIcons.Clock && <lucideIcons.Clock className="w-4 h-4 inline mr-2" />}
//                       Pickup Time
//                     </label>
//                     <select
//                       value={pickupTime}
//                       onChange={(e) => setPickupTime(e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                     >
//                       <option value="">Select time</option>
//                       <option value="09:00">9:00 AM</option>
//                       <option value="10:00">10:00 AM</option>
//                       <option value="11:00">11:00 AM</option>
//                       <option value="14:00">2:00 PM</option>
//                       <option value="15:00">3:00 PM</option>
//                       <option value="16:00">4:00 PM</option>
//                       <option value="17:00">5:00 PM</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       {lucideIcons.MapPin && <lucideIcons.MapPin className="w-4 h-4 inline mr-2" />}
//                       Pickup Address
//                     </label>
//                     <textarea
//                       value={address}
//                       onChange={(e) => setAddress(e.target.value)}
//                       placeholder="Enter your full address with building/villa number"
//                       rows={3}
//                       className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       {lucideIcons.Phone && <lucideIcons.Phone className="w-4 h-4 inline mr-2" />}
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       value={phone}
//                       onChange={(e) => setPhone(e.target.value)}
//                       placeholder="+971 50 123 4567"
//                       className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                     />
//                   </div>

//                   <button
//                     onClick={handleBooking}
//                     disabled={cart.length === 0 || !pickupDate || !pickupTime || !address || !phone}
//                     className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
//                   >
//                     {lucideIcons.Truck && <lucideIcons.Truck className="w-5 h-5 inline mr-2" />}
//                     Confirm Pickup - AED {getTotalPrice()}
//                   </button>

//                   <p className="text-xs text-gray-500 text-center">
//                     Free pickup and delivery • Pay cash on delivery • 100% satisfaction guaranteed
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Header from '../components/Header';

// Dynamically import lucide-react icons
const lucideIcons = dynamic(() => import('lucide-react').then(mod => ({
  ShoppingCart: mod.ShoppingCart,
  Calendar: mod.Calendar,
  Clock: mod.Clock,
  MapPin: mod.MapPin,
  Phone: mod.Phone,
  Truck: mod.Truck,
})), { ssr: false });

export default function CartPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedServices, setSelectedServices] = useState({});
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  // Set isClient on mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load cart from localStorage client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      const savedSelectedServices = localStorage.getItem('selectedServices');
      setCart(savedCart ? JSON.parse(savedCart) : []);
      setSelectedServices(savedSelectedServices ? JSON.parse(savedSelectedServices) : {});
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (isClient && typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
      localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
    }
  }, [cart, selectedServices, isClient]);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleBooking = () => {
    if (cart.length > 0 && pickupDate && pickupTime && address && phone) {
      alert(`Booking confirmed! We'll pick up your laundry on ${pickupDate} at ${pickupTime}. Total: AED ${getTotalPrice()}`);
      setCart([]);
      setSelectedServices({});
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify([]));
        localStorage.setItem('selectedServices', JSON.stringify({}));
      }
      router.push('/services');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pb-20 md:pb-0">
      {!isClient ? (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <Header cart={[]} />
        </div>
      ) : (
        <>
          <Header cart={cart} />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <button
              onClick={() => router.push('/services')}
              className="mb-6 flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Services</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>
                
                {cart.length === 0 ? (
                  <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                    {lucideIcons.ShoppingCart && <lucideIcons.ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />}
                    <p className="text-gray-500">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="bg-white rounded-xl p-4 shadow-md border border-gray-100 contain-content">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                              <Image
                                src={item.img || '/images/fallback.jpg'}
                                alt={item.name}
                                fill
                                sizes="48px"
                                className="object-cover"
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAIuwO6N4Xh5gAAAABJRU5ErkJggg=="
                                quality={75}
                                onError={(e) => {
                                  e.target.src = '/images/fallback.jpg';
                                }}
                              />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{item.name}</h4>
                              <p className="text-sm text-gray-500">AED {item.price} {item.unit}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-gray-900">× {item.quantity}</div>
                            <div className="text-sm text-blue-600">AED {(item.price * item.quantity).toFixed(0)}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-200">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-900">Total</span>
                        <span className="text-2xl font-bold text-blue-600">AED {getTotalPrice()}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Schedule Pickup</h2>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {lucideIcons.Calendar && <lucideIcons.Calendar className="w-4 h-4 inline mr-2" />}
                      Pickup Date
                    </label>
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {lucideIcons.Clock && <lucideIcons.Clock className="w-4 h-4 inline mr-2" />}
                      Pickup Time
                    </label>
                    <select
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {lucideIcons.MapPin && <lucideIcons.MapPin className="w-4 h-4 inline mr-2" />}
                      Pickup Address
                    </label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter your full address with building/villa number"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {lucideIcons.Phone && <lucideIcons.Phone className="w-4 h-4 inline mr-2" />}
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+971 50 123 4567"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <button
                    onClick={handleBooking}
                    disabled={cart.length === 0 || !pickupDate || !pickupTime || !address || !phone}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {lucideIcons.Truck && <lucideIcons.Truck className="w-5 h-5 inline mr-2" />}
                    Confirm Pickup - AED {getTotalPrice()}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Free pickup and delivery • Pay cash on delivery • 100% satisfaction guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
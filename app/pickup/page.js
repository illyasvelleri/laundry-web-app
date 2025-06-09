// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import dynamic from 'next/dynamic';
// import Header from '../components/Header';

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
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pb-20 md:pb-0">
//       {!isClient ? (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
//           <Header cart={[]} />
//         </div>
//       ) : (
//         <>
//           <Header cart={cart} />
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//             <button
//               onClick={() => router.push('/services')}
//               className="mb-6 flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//               </svg>
//               <span>Back to Services</span>
//             </button>

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


"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ShoppingCart, Calendar, Clock, MapPin, Phone, Truck, MessageSquare, Trash2, User } from 'lucide-react';
import Header from '../components/Header';

export default function PickupPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedServices, setSelectedServices] = useState({});
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [locationType, setLocationType] = useState('');
  const [contactName, setContactName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [userPoints, setUserPoints] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [errors, setErrors] = useState({});

  // Set isClient and load cart
  useEffect(() => {
    setIsClient(true);
    const savedCart = localStorage.getItem('cart');
    const savedSelectedServices = localStorage.getItem('selectedServices');
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedSelectedServices) setSelectedServices(JSON.parse(savedSelectedServices));

    // Fetch user points
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

  // Save cart to localStorage
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('cart', JSON.stringify(cart));
      localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
    }
  }, [cart, selectedServices, isClient]);

  const getTotalItems = () => cart.length;

  const getTotalPrice = () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    if ((total > 100 || userPoints >= 100) && !discountApplied) {
      setDiscountApplied(true);
      return total * 0.9; // 10% discount
    }
    return total;
  };

  const removeFromCart = (itemId, itemName) => {
    if (confirm(`Are you sure you want to remove "${itemName}" from your order?`)) {
      setCart(cart.filter(item => item.id !== itemId));
      setSelectedServices({ ...selectedServices, [itemId]: false });
      const newTotal = cart.filter(item => item.id !== itemId).reduce((sum, item) => sum + item.price, 0);
      if (newTotal <= 100 && userPoints < 100) {
        setDiscountApplied(false);
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!pickupDate) newErrors.pickupDate = 'Pickup date is required';
    if (!pickupTime) newErrors.pickupTime = 'Pickup time is required';
    if (!locationType) newErrors.locationType = 'Location type is required';
    if (!contactName) newErrors.contactName = 'Contact name is required';
    if (!address) newErrors.address = 'Address is required';
    if (!phone || !/^\+971\s\d{2}\s\d{3}\s\d{4}$/.test(phone)) {
      newErrors.phone = 'Valid UAE phone number is required (e.g., +971 50 123 4567)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBooking = async () => {
    if (cart.length === 0) {
      alert('Please select at least one service.');
      return;
    }
    if (!validateForm()) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          services: cart,
          total: getTotalPrice(),
          discountApplied,
          pickupDate,
          pickupTime,
          locationType,
          contactName,
          address,
          phone,
          notes,
        }),
      });
      if (response.ok) {
        const { pointsEarned } = await response.json();
        setUserPoints(userPoints + pointsEarned - (discountApplied ? 100 : 0));
        setCart([]);
        setSelectedServices({});
        localStorage.setItem('cart', JSON.stringify([]));
        localStorage.setItem('selectedServices', JSON.stringify({}));
        alert(`Booking confirmed! We'll pick up your laundry from ${locationType} on ${pickupDate} at ${pickupTime}. Total: AED ${getTotalPrice().toFixed(2)}`);
        router.push('/services');
      } else {
        console.error('Order placement failed');
        alert('Failed to place order. Please try again.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-24 md:pb-0">
      {!isClient ? (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
          <Header cart={[]} />
        </div>
      ) : (
        <>
          <Header cart={cart} />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <button
              onClick={() => router.push('/services')}
              className="mb-8 flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Services</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Order Summary */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Order Summary</h2>
                {cart.length === 0 ? (
                  <div className="bg-white rounded-2xl p-10 text-center shadow-xl border border-gray-100">
                    <ShoppingCart className="w-20 h-20 text-gray-200 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">No services selected</p>
                    <button
                      onClick={() => router.push('/services')}
                      className="mt-4 inline-block text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Add Services
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white rounded-xl p-5 shadow-md border border-gray-100 relative hover:shadow-lg transition-shadow duration-200"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="relative w-14 h-14 rounded-lg overflow-hidden">
                              <Image
                                src={item.img || '/images/fallback.jpg'}
                                alt={item.name}
                                fill
                                sizes="56px"
                                className="object-cover"
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAIuwO6N4Xh5g=="
                                quality={75}
                                onError={(e) => { e.target.src = '/images/fallback.jpg'; }}
                              />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 text-lg">{item.name}</h4>
                              <p className="text-sm text-gray-500">AED {item.price} {item.unit}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="text-base font-medium text-blue-600">AED {item.price.toFixed(0)}</span>
                            <button
                              onClick={() => removeFromCart(item.id, item.name)}
                              className="text-gray-500 hover:text-blue-600 transition-colors duration-200 flex items-center"
                              aria-label={`Remove ${item.name} from cart`}
                              title="Remove item"
                            >
                              <Trash2 className="w-5 h-5 mr-1" />
                              <span className="text-sm">Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border-2 border-blue-200 shadow-md">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-semibold text-gray-900">Total ({getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''})</span>
                        <span className="text-2xl font-bold text-blue-600">
                          AED {getTotalPrice().toFixed(2)}
                          {discountApplied && <span className="text-sm text-green-600 ml-2">(10% off)</span>}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Schedule Pickup */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Schedule Pickup</h2>
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 space-y-6">
                  {/* Pickup Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2 text-blue-600" />
                      Pickup Date
                    </label>
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 border ${errors.pickupDate ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                      required
                    />
                    {errors.pickupDate && <p className="text-xs text-red-500 mt-1">{errors.pickupDate}</p>}
                  </div>

                  {/* Pickup Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-2 text-blue-600" />
                      Pickup Time
                    </label>
                    <select
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className={`w-full px-4 py-3 border ${errors.pickupTime ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                      required
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
                    {errors.pickupTime && <p className="text-xs text-red-500 mt-1">{errors.pickupTime}</p>}
                  </div>

                  {/* Location Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2 text-blue-600" />
                      Location Type
                    </label>
                    <select
                      value={locationType}
                      onChange={(e) => setLocationType(e.target.value)}
                      className={`w-full px-4 py-3 border ${errors.locationType ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                      required
                    >
                      <option value="">Select location type</option>
                      <option value="Flat">Flat/Apartment</option>
                      <option value="Villa">Villa</option>
                      <option value="Office">Office</option>
                      <option value="Hospital">Hospital/Clinic</option>
                      <option value="Hotel">Hotel</option>
                    </select>
                    {errors.locationType && <p className="text-xs text-red-500 mt-1">{errors.locationType}</p>}
                  </div>

                  {/* Contact Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2 text-blue-600" />
                      Contact Name
                    </label>
                    <input
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g., John Doe"
                      className={`w-full px-4 py-3 border ${errors.contactName ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                      required
                    />
                    {errors.contactName && <p className="text-xs text-red-500 mt-1">{errors.contactName}</p>}
                  </div>

                  {/* Pickup Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2 text-blue-600" />
                      Pickup Address
                    </label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g., Burj Al Arab, Jumeirah St, Dubai"
                      rows={3}
                      className={`w-full px-4 py-3 border ${errors.address ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none`}
                      required
                    />
                    {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2 text-blue-600" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+971 50 123 4567"
                      className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                      required
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2 text-blue-600" />
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g., Please contact reception for hospital pickup"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Confirm Button */}
                  <button
                    onClick={handleBooking}
                    disabled={cart.length === 0}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Truck className="w-5 h-5 inline mr-2" />
                    Confirm Pickup - AED {getTotalPrice().toFixed(2)}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Free pickup across Dubai • Cash on delivery • 100% satisfaction guaranteed
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

// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import dynamic from 'next/dynamic';
// import Header from '../components/Header';

// // Dynamically import lucide-react icons
// const lucideIcons = dynamic(() => import('lucide-react').then(mod => ({
//   ShoppingCart: mod.ShoppingCart,
//   Calendar: mod.Calendar,
//   Clock: mod.Clock,
//   MapPin: mod.MapPin,
//   Phone: mod.Phone,
//   Truck: mod.Truck,
//   MessageSquare: mod.MessageSquare,
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
//   const [notes, setNotes] = useState('');
//   const [userPoints, setUserPoints] = useState(0);
//   const [discountApplied, setDiscountApplied] = useState(false);

//   // Set isClient and load cart
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

//   // Save cart to localStorage
//   useEffect(() => {
//     if (isClient) {
//       localStorage.setItem('cart', JSON.stringify(cart));
//       localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
//     }
//   }, [cart, selectedServices, isClient]);

//   const getTotalItems = () => {
//     return cart.length;
//   };

//   const getTotalPrice = () => {
//     const total = cart.reduce((sum, item) => sum + item.price, 0);
//     if ((total > 100 || userPoints >= 100) && !discountApplied) {
//       setDiscountApplied(true);
//       return total * 0.9; // 10% discount
//     }
//     return total;
//   };

//   const handleBooking = async () => {
//     if (cart.length > 0 && pickupDate && pickupTime && address && phone) {
//       try {
//         const response = await fetch('/api/orders', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//           body: JSON.stringify({
//             services: cart,
//             total: getTotalPrice(),
//             discountApplied,
//             pickupDate,
//             pickupTime,
//             address,
//             phone,
//             notes,
//           }),
//         });
//         if (response.ok) {
//           const { pointsEarned } = await response.json();
//           setUserPoints(userPoints + pointsEarned - (discountApplied ? 100 : 0));
//           setCart([]);
//           setSelectedServices({});
//           localStorage.setItem('cart', JSON.stringify([]));
//           localStorage.setItem('selectedServices', JSON.stringify({}));
//           alert(`Booking confirmed! We'll pick up your laundry on ${pickupDate} at ${pickupTime}. Total: AED ${getTotalPrice().toFixed(2)}`);
//           router.push('/services');
//         } else {
//           console.error('Order placement failed');
//         }
//       } catch (error) {
//         console.error('Error placing order:', error);
//         alert('Failed to place order. Please try again.');
//       }
//     } else {
//       alert('Please fill in all required fields.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pb-20 md:pb-0">
//       {!isClient ? (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
//           <Header cart={[]} />
//         </div>
//       ) : (
//         <>
//           <Header cart={cart} />
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//             <button
//               onClick={() => router.push('/services')}
//               className="mb-6 flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//               </svg>
//               <span>Back to Services</span>
//             </button>

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
//                             <div className="text-sm text-blue-600">AED {item.price.toFixed(0)}</div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
                    
//                     <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-200">
//                       <div className="flex justify-between items-center">
//                         <span className="text-lg font-semibold text-gray-900">Total</span>
//                         <span className="text-2xl font-bold text-blue-600">
//                           AED {getTotalPrice().toFixed(2)}
//                           {discountApplied && ' (10% off)'}
//                         </span>
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
//                       required
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
//                       required
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
//                       required
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
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       {lucideIcons.MessageSquare && <lucideIcons.MessageSquare className="w-4 h-4 inline mr-2" />}
//                       Additional Notes (Optional)
//                     </label>
//                     <textarea
//                       value={notes}
//                       onChange={(e) => setNotes(e.target.value)}
//                       placeholder="E.g., In my hotel, 50 bedsheets"
//                       rows={3}
//                       className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
//                     />
//                   </div>

//                   <button
//                     onClick={handleBooking}
//                     disabled={cart.length === 0 || !pickupDate || !pickupTime || !address || !phone}
//                     className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
//                   >
//                     {lucideIcons.Truck && <lucideIcons.Truck className="w-5 h-5 inline mr-2" />}
//                     Confirm Pickup - AED {getTotalPrice().toFixed(2)}
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
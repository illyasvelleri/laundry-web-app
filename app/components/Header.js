// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";
// import {
//     Home,
//     Sparkles,
//     ClipboardList,
//     Gift,
//     User,
// } from "lucide-react";

// export default function Header() {
//     const pathname = usePathname();

//     const navItems = [
//         { href: "/", label: "Home", icon: Home },
//         { href: "/services", label: "Services", icon: Sparkles },
//         { href: "/orders", label: "Orders", icon: ClipboardList },
//         { href: "/offers", label: "Offers", icon: Gift },
//         { href: "/profile", label: "Profile", icon: User },
//     ];

//     const isActive = (href) => pathname === href;

//     return (
//         <>
//             {/* Top Navigation (Desktop) */}
//             {/* Top Navigation (Desktop) */}
//             <nav className="hidden md:flex justify-between items-center w-full px-8 py-4 bg-white shadow-sm rounded-b-3xl">
//                 <div className="text-2xl font-bold text-[#0d6efd]">Fast Laundry</div>

//                 <div className="flex gap-8 text-gray-700 text-sm font-medium">
//                     {navItems.map((item, i) => (
//                         <Link
//                             key={i}
//                             href={item.href}
//                             className="group flex items-center gap-2 relative hover:text-[#0d6efd] transition-colors duration-200"
//                         >
//                             <item.icon className="w-5 h-5" />
//                             <span className="relative">
//                                 {item.label}
//                                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0d6efd] transition-all duration-300 group-hover:w-full"></span>
//                             </span>
//                         </Link>
//                     ))}
//                 </div>
//             </nav>


//             {/* Mobile Bottom Navigation */}
//             <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.6 }}
//                 style={{ zIndex: 9999 }}
//                 className="fixed bottom-0 left-0 right-0 flex justify-around items-center bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-t-3xl shadow-2xl md:hidden backdrop-blur-md border-t border-green-500/30"
//             >
//                 {navItems.map((item) => (
//                     <Link
//                         key={item.label}
//                         href={item.href}
//                         className={`flex flex-col items-center text-xs font-medium transition-all duration-300 ease-in-out ${isActive(item.href) ? "text-white" : "text-white/70"
//                             }`}
//                     >
//                         <motion.div
//                             whileHover={{ scale: 1.2 }}
//                             whileTap={{ scale: 0.9 }}
//                             className={`p-3 rounded-xl transition-all duration-300 ease-in-out ${isActive(item.href) ? "bg-white/20" : "hover:bg-white/10"
//                                 }`}
//                         >
//                             <item.icon
//                                 className={`h-6 w-6 transition-all duration-300 ${isActive(item.href) ? "text-white" : "text-white/70"
//                                     }`}
//                             />
//                         </motion.div>
//                         <motion.span
//                             initial={{ opacity: 0, y: 5 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.3, delay: 0.2 }}
//                             className={`mt-1 text-[10px] transition-all duration-300 ${isActive(item.href)
//                                 ? "text-white font-semibold"
//                                 : "text-white/50"
//                                 }`}
//                         >
//                             {item.label}
//                         </motion.span>
//                         {isActive(item.href) && (
//                             <motion.div
//                                 layoutId="mobileActiveIndicator"
//                                 className="absolute bottom-0 w-12 h-1 bg-white rounded-t"
//                             />
//                         )}
//                     </Link>
//                 ))}
//             </motion.div>
//         </>
//     );
// }


'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Home, Sparkles, ClipboardList, User, ShoppingCart } from 'lucide-react';

export default function Header({ cart = [] }) {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/services', label: 'Services', icon: Sparkles },
    { href: '/orders', label: 'Orders', icon: ClipboardList },
    { href: '/profile', label: 'Profile', icon: User },
    { href: '/cart', label: 'Cart', icon: ShoppingCart },
  ];

  const isActive = (href) => pathname === href;

  const getTotalItems = () => {
    return Array.isArray(cart) ? cart.reduce((total, item) => total + (item.quantity || 0), 0) : 0;
  };

  return (
    <>
      {/* Top Navigation (Desktop) */}
      <nav className="hidden md:flex justify-between items-center w-full px-8 py-4 bg-white shadow-sm rounded-b-3xl contain-paint">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
            <Image
              src="/images/logo.jpg"
              alt="Fast Laundry Logo"
              width={24}
              height={24}
              className="rounded-full object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAIuwO6N4Xh5gAAAABJRU5ErkJggg=="
              quality={75}
              onError={(e) => {
                e.target.src = '/images/fallback.jpg';
              }}
            />
          </div>
          <div className="text-2xl font-bold text-[#0d6efd]">Fast Laundry</div>
        </div>

        <div className="flex gap-8 text-gray-700 text-sm font-medium">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group flex items-center gap-2 relative hover:text-[#0d6efd] transition-colors duration-200"
            >
              <item.icon className="w-5 h-5" />
              <span className="relative">
                {item.label}
                <span className={`absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0d6efd] transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'group-hover:w-full'}`}></span>
              </span>
              {item.label === 'Cart' && getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ zIndex: 9999 }}
        className="fixed bottom-0 left-0 right-0 flex justify-around items-center bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-t-3xl shadow-2xl md:hidden backdrop-blur-md border-t border-green-500/30 contain-paint"
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center text-xs font-medium transition-all duration-300 ease-in-out relative ${isActive(item.href) ? 'text-white' : 'text-white/70'}`}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-xl transition-all duration-300 ease-in-out ${isActive(item.href) ? 'bg-white/20' : 'hover:bg-white/10'}`}
            >
              <div className="relative">
                <item.icon
                  className={`h-7 w-7 transition-all duration-300 ${isActive(item.href) ? 'text-white' : 'text-white/70'}`}
                />
                {item.label === 'Cart' && getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold animate-pulse">
                    {getTotalItems()}
                  </span>
                )}
              </div>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className={`mt-1 text-[10px] transition-all duration-300 ${isActive(item.href) ? 'text-white font-semibold' : 'text-white/50'}`}
            >
              {item.label}
            </motion.span>
            {isActive(item.href) && (
              <motion.div
                layoutId="mobileActiveIndicator"
                className="absolute bottom-0 w-12 h-1 bg-white rounded-t"
              />
            )}
          </Link>
        ))}
      </motion.div>
    </>
  );
}
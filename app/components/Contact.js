// 'use client';
// import { motion } from 'framer-motion';

// const fadeUpVariant = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   }),
// };

// const ContactSection = () => {
//   const branches = [
//     {
//       name: 'AL WARQA',
//       map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14430.735038521832!2d55.4115771871582!3d25.192882214708827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f677e63360b61%3A0xb7eb3c52c1d4945c!2sAl%20Warqa%20-%20Dubai!5e0!3m2!1sen!2sae!4v1691671288851!5m2!1sen!2sae',
//     },
//     {
//       name: 'MIRDIFF',
//       map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14429.47327992084!2d55.40027438715814!3d25.22553531438456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bbd10ec1227%3A0x1eab8a9f19e041df!2sMirdif%20-%20Dubai!5e0!3m2!1sen!2sae!4v1691671324394!5m2!1sen!2sae',
//     },
//     {
//       name: 'ARJAN',
//       map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.343790937721!2d55.24507957478609!3d25.095015477761932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b9767927cf3%3A0x82735229e894c4a6!2sArjan%20-%20Dubai!5e0!3m2!1sen!2sae!4v1691671345809!5m2!1sen!2sae',
//     },
//     {
//       name: 'AL QUSAIS',
//       map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115751.4169481093!2d55.23214121236144!3d25.27698713573553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f62e1c21984a5%3A0x8d9aef12155cce7c!2sAl%20Qusais%20-%20Dubai!5e0!3m2!1sen!2sae!4v1691671362799!5m2!1sen!2sae',
//     },
//   ];

//   return (
//     <section id="contact-us" className="mt-[90px] px-4 sm:px-8 md:px-16 lg:px-24">
//       <div className="max-w-7xl mx-auto">
//         <motion.h2
//           className="text-3xl font-bold text-center mb-4"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUpVariant}
//         >
//           Contact Us
//         </motion.h2>

//         <motion.p
//           className="text-center text-gray-600 mb-10"
//           custom={1}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUpVariant}
//         >
//           We're excited to connect with you! Whether you have inquiries about our laundry services, need assistance with a booking, or simply want to reach out, our team is ready to help.
//         </motion.p>

//         <div className="grid md:grid-cols-2 gap-12">
//   <motion.div
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//     custom={2}
//     variants={fadeUpVariant}
//     className="bg-white shadow-md rounded-lg p-8"
//   >
//     <h3 className="text-2xl font-semibold text-gray-800 mb-8 border-b pb-3">Need Support?</h3>
//     <form className="space-y-6">
//       {['Full Name', 'Place', 'Contact Number'].map((label, i) => (
//         <div key={i} className="flex flex-col">
//           <label className="mb-2 text-gray-700 font-medium">{label}:</label>
//           <input
//             type="text"
//             className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//             required
//           />
//         </div>
//       ))}
//       <div className="flex flex-col">
//         <label className="mb-2 text-gray-700 font-medium">Message:</label>
//         <textarea
//           rows={5}
//           className="border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//           required
//         />
//       </div>
//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
//       >
//         Submit
//       </button>
//     </form>
//   </motion.div>

//   <motion.div
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//     custom={3}
//     variants={fadeUpVariant}
//     className="bg-white shadow-md rounded-lg p-6 flex flex-col"
//   >
//     <p className="mb-4 text-xl font-semibold text-gray-800 border-b pb-3">
//       Fast Laundry NAD AL HAMMAR
//     </p>
//     <iframe
//       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14430.30499437514!2d55.38957818715826!3d25.20364851459185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6787cb8915b9%3A0x1818a9f7a9e8fbc7!2sNadd%20Al%20Hammar%20-%20Dubai!5e0!3m2!1sen!2sae!4v1691671381477!5m2!1sen!2sae"
//       width="100%"
//       height="320"
//       className="rounded-md border border-gray-200 shadow-sm"
//       allowFullScreen
//       loading="lazy"
//       referrerPolicy="no-referrer-when-downgrade"
//       title="Fast Laundry NAD AL HAMMAR Location"
//     />
//   </motion.div>
// </div>

//         <motion.h3
//           className="text-center text-gray-700 font-semibold text-2xl my-12"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           custom={4}
//           variants={fadeUpVariant}
//         >
//           Locations of Our Branches
//         </motion.h3>

//         <div className="grid md:grid-cols-2 gap-6">
//           {branches.map((branch, index) => (
//             <motion.div
//               key={index}
//               className="space-y-2 p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               custom={5 + index}
//               variants={fadeUpVariant}
//             >
//               <p className="font-semibold text-lg text-blue-700 tracking-wide">{branch.name}</p>
//               <iframe
//                 src={branch.map}
//                 width="100%"
//                 height="300"
//                 className="w-full rounded"
//                 loading="lazy"
//                 allowFullScreen
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;



'use client';

import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const ContactSection = () => {
  const branches = [
    {
      name: 'AL WARQA',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14430.735038521832!2d55.4115771871582!3d25.192882214708827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f677e63360b61%3A0xb7eb3c52c1d4945c!2sAl%20Warqa%20-%20Dubai!5e0!3m2!1sen!2sae!4v1691671288851!5m2!1sen!2sae',
    },
    {
      name: 'MIRDIFF',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14429.47327992084!2d55.40027438715814!3d25.22553531438456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bbd10ec1227%3A0x1eab8a9f19e041df!2sMirdif%20-%20Dubai!5e0!3m2!1sen!2sae!4v1691671324394!5m2!1sen!2sae',
    },
    {
      name: 'ARJAN',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.343790937721!2d55.24507957478609!3d25.095015477761932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b9767927cf3%3A0x82735229e894c4a6!2sArjan%20-%20Dubai!5e0!3m2!1sen!2sae!4v1691671345809!5m2!1sen!2sae',
    },
    {
      name: 'AL QUSAIS',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115751.4169481093!2d55.23214121236144!3d25.27698713573553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f62e1c21984a5%3A0x8d9aef12155cce7c!2sAl%20Qusais%20-%20Dubai!5e0!3m2!1sen!2sae!4v1691671362799!5m2!1sen!2sae',
    },
  ];

  return (
    <section id="contact-us" className="mt-[90px] px-4 sm:px-8 md:px-16 lg:px-24 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-10"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          We&apos;re excited to connect with you! Whether you have inquiries about our laundry services, need assistance with a booking, or simply want to reach out, our team is ready to help.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUpVariant}
            className="bg-white shadow-md rounded-lg p-8 contain-content"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 border-b pb-3">Need Support?</h3>
            <form className="space-y-6">
              {['Full Name', 'Place', 'Contact Number'].map((label, i) => (
                <div key={i} className="flex flex-col">
                  <label className="mb-2 text-gray-700 font-medium">{label}:</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                  />
                </div>
              ))}
              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-medium">Message:</label>
                <textarea
                  rows={5}
                  className="border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeUpVariant}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col contain-content"
          >
            <p className="mb-4 text-xl font-semibold text-gray-800 border-b pb-3">
              Fast Laundry NAD AL HAMMAR
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14430.30499437514!2d55.38957818715826!3d25.20364851459185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6787cb8915b9%3A0x1818a9f7a9e8fbc7!2sNadd%20Al%20Hammar%20-%20Dubai!5e0!3m2!1sen!2sae!4v1691671381477!5m2!1sen!2sae"
              width="100%"
              height="320"
              className="rounded-md border border-gray-200 shadow-sm"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fast Laundry NAD AL HAMMAR Location"
            />
          </motion.div>
        </div>

        <motion.h3
          className="text-center text-gray-700 font-semibold text-2xl my-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          variants={fadeUpVariant}
        >
          Locations of Our Branches
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-6">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              className="space-y-2 p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 contain-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5 + index}
              variants={fadeUpVariant}
            >
              <p className="font-semibold text-lg text-blue-700 tracking-wide">{branch.name}</p>
              <iframe
                src={branch.map}
                width="100%"
                height="300"
                className="w-full rounded"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title={`Fast Laundry ${branch.name} Location`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
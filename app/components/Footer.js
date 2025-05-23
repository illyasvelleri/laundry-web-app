'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } },
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-32">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          className="flex flex-col md:flex-row md:justify-between gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <motion.div className="md:w-1/3" variants={fadeUp}>
            <h3 className="text-xl font-semibold mb-4">Location</h3>
            <p>
              AL WARQA - 1, AL QUSAIS, NAD AL HAMMAR, MIRDIF, ARJAN, SHARJAH - IND6
            </p>
          </motion.div>

          <motion.div className="md:w-1/3" variants={fadeUp}>
            <h3 className="text-xl font-semibold mb-4">Email</h3>
            <p>fastlaundryuae@gmail.com</p>
          </motion.div>

          <motion.div className="md:w-1/3" variants={fadeUp}>
            <h3 className="text-xl font-semibold mb-4">WhatsApp</h3>
            <p>00971559900160</p>
            <p>00971552334770</p>
          </motion.div>
        </motion.div>
      </div>

      {/* <motion.div
        className="footer-bottom border-t border-gray-300 text-center py-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <p className="text-sm text-gray-600">&copy; 2024 Fast Laundry. All Rights Reserved.</p>
      </motion.div> */}
    </footer>
  );
};

export default Footer;

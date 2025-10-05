'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PricingPlan() {
  const features = [
    'Android & iOS APP for User',
    'Android & iOS APP for Seller', 
    'Android & iOS APP for Driver',
    'Master Admin Panel',
    'Support For 2 Months'
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Service Package</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Complete mobile app development solution for your business
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="bg-slate-900 rounded-xl p-6 shadow-2xl border border-slate-700/50 hover:border-purple-500/50 max-w-sm w-full relative overflow-hidden mx-auto"
          >
            {/* Background gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            
            {/* Popular badge */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                Most Popular
              </span>
            </div>

            {/* Card content */}
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-white mb-2">Startup Plan</h3>
              <p className="text-gray-300 mb-6">Complete App Development Package</p>
              
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-3xl font-bold text-white">₹59,999</span>
                </div>
                <p className="text-purple-600 font-semibold mt-1">Lifetime</p>
              </div>

              {/* Features */}
              <div className="text-left mb-6">
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Link href="/consultancy">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book Free Consultancy
                </motion.button>
              </Link>
              
              <p className="text-gray-400 text-xs mt-2">No hidden charges • 100% satisfaction guaranteed</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
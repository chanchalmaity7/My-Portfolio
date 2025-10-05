'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Contact Me</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Get In Touch</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
              Ready to work together? Let&apos;s discuss your next project and bring your ideas to life with modern web technologies.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white">📍</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-400">Available for Remote Work</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white">📧</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400">maitychanchal7@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center cursor-pointer" onClick={() => window.open('https://wa.me/919932915707', '_blank')}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">WhatsApp</h4>
                  <p className="text-gray-400 cursor-pointer hover:text-green-400 transition-colors" onClick={() => window.open('https://wa.me/919932915707', '_blank')}>+91 99329 15707</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white">💼</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Specialization</h4>
                  <p className="text-gray-400">MERN Stack & Next.js Development</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-6 sm:p-8 rounded-xl"
          >
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(147, 51, 234, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
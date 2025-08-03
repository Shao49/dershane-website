'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <main className="bg-white text-neutral-800">
      {/* Hero Alanı */}
      <section className="bg-[#002d4a] text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold"
        >
          İletişim
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="mt-4 max-w-xl mx-auto text-white/80 text-lg"
        >
          Bizimle iletişime geçin. Size yardımcı olmaktan memnuniyet duyarız.
        </motion.p>
      </section>

      {/* İletişim Bilgileri + Harita */}
      <section className="py-20 px-6 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-8"
          >
            {[
              {
                icon: <FaPhone className="text-blue-700 text-2xl mt-1" />,
                title: 'Telefon',
                desc: '+90 555 555 55 55',
              },
              {
                icon: <FaEnvelope className="text-blue-700 text-2xl mt-1" />,
                title: 'E-Posta',
                desc: 'iletisim@orneksite.com',
              },
              {
                icon: <FaMapMarkerAlt className="text-blue-700 text-2xl mt-1" />,
                title: 'Adres',
                desc: '1234 Eğitim Caddesi, Ankara, Türkiye',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                {item.icon}
                <div>
                  <h3 className="text-xl font-bold text-neutral-800">{item.title}</h3>
                  <p className="text-neutral-600">{item.desc}</p>
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/905555555555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp ile İletişim
            </a>
          </motion.div>

          {/* Google Harita */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.7414271412854!2d32.85974151537336!3d39.93336477942569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f5c267cbaef%3A0x3d8f9b5b15c5b3b5!2sAnkara!5e0!3m2!1str!2str!4v1618033988749!5m2!1str!2str"
              width="100%"
              height="400"
              loading="lazy"
              className="border-none w-full h-[400px]"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>
    </main>
  )
}

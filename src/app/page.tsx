'use client'

import Hero from '@/components/Hero'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'

// CountUp SSR hatasını önlemek için dinamik import
const CountUp = dynamic(() => import('react-countup'), { ssr: false })

export default function HomePage() {
  const nedenler = [
    'Uzman Kadro',
    'Kişiye Özel Eğitim',
    'Yüksek Başarı Oranı',
    'Modern Sınıf Ortamı',
  ]

  const programlar = [
    'TYT - AYT Hazırlık',
    'LGS Hazırlık',
    'KPSS - DGS Kursları',
    'Hafta İçi Grupları',
    'Hafta Sonu Grupları',
    'Birebir Özel Ders',
  ]

  const sayaclar = [
    { value: 10, label: 'Yıllık Tecrübe' },
    { value: 100, label: 'Mutlu Öğrenci' },
    { value: 3, label: 'Uzman Eğitmen' },
    { value: 5, label: 'Yaş Grubu' },
  ]

  // 🔧 Her sayaç için ayrı ayrı useInView kullan
  const [ref0, inView0] = useInView({ threshold: 0.6, triggerOnce: true })
  const [ref1, inView1] = useInView({ threshold: 0.6, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.6, triggerOnce: true })
  const [ref3, inView3] = useInView({ threshold: 0.6, triggerOnce: true })

  const refs = [ref0, ref1, ref2, ref3]
  const inViews = [inView0, inView1, inView2, inView3]

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Neden Biz */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white px-6">
        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-12">
          Neden Bizi Tercih Etmelisiniz?
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {nedenler.map((title, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
              <p className="text-sm text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat justo a enim.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Eğitim Programları */}
      <section className="py-20 bg-[#f0f4f8] px-6">
        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-12">
          Eğitim Programlarımız
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programlar.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-blue-100 rounded-xl p-6 bg-white hover:bg-blue-50 transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-blue-800 mb-1">{program}</h3>
              <p className="text-sm text-neutral-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sayaçlar */}
      <section className="py-24 bg-[#002d4a] text-center text-white px-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Sizi de aramızda görmek isteriz!
        </h2>
        <p className="mt-4 max-w-xl mx-auto">
          Hemen bizimle iletişime geçin, kontenjan fırsatlarını kaçırmayın!
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {sayaclar.map((item, i) => (
            <div key={i} ref={refs[i]} className="flex flex-col items-center">
              <div className="text-4xl font-bold">
                {inViews[i] ? <CountUp end={item.value} duration={2} /> : '0'}+
              </div>
              <p className="mt-2 text-white/90">{item.label}</p>
            </div>
          ))}
        </div>

        <a
          href="/iletisim"
          className="inline-block mt-12 px-8 py-3 rounded-lg font-semibold text-blue-700 bg-white border border-white transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            Bize Ulaşın
          </span>
          <span className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute inset-0 blur-xl bg-blue-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></span>
        </a>
      </section>
    </>
  )
}

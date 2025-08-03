'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const fullText = 'Geleceğinizi Bizimle Şekillendirin'
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        // Yazma animasyonu
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1))
          setIndex(index + 1)
        } else {
          setDeleting(true)
        }
      } else {
        // Silme animasyonu
        if (index > 0) {
          setDisplayedText(fullText.slice(0, index - 1))
          setIndex(index - 1)
        } else {
          setDeleting(false)
        }
      }
    }, deleting ? 40 : 100) // Silme daha hızlı

    return () => clearTimeout(timeout)
  }, [index, deleting])

  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
      
      {/* Arka plan görseli */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center scale-110 blur-[1.5px] animate-zoom-in-slow"
          style={{ backgroundImage: `url('/dershane-hero.jpg')` }}
        />
      </div>

      {/* İçerik */}
      <div className="z-10 px-6">
        
        {/* Typewriter animasyonlu başlık */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight min-h-[4rem]"
        >
          {displayedText}
          <span className="animate-pulse">|</span>
        </motion.h1>

        {/* Açıklama */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
        >
          Başarıya giden yolda yanınızdayız. Uzman kadro ve kaliteli eğitimle hedeflerinize ulaşın.
        </motion.p>

        {/* CTA Buton */}
        <motion.a
  href="/iletisim"
  whileHover={{ scale: 1.05 }}
  className="group mt-10 inline-block px-8 py-3 rounded-lg font-semibold text-blue-700 bg-white border border-blue-700 transition-all duration-300 relative overflow-hidden"
>
  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
    Bize Ulaşın
  </span>
  <span className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  <span className="absolute inset-0 blur-xl bg-blue-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></span>
</motion.a>
      </div>
    </section>
  )
}

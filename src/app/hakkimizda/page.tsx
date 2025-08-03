'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaBullseye, FaUsers, FaLightbulb } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <main className="bg-[#002d4a] text-white">
      {/* HERO + Biz Kimiz */}
      <section className="py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Hakkımızda
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-2xl mx-auto text-lg text-white/80"
        >
          Geleceğe yön veren bir eğitim anlayışıyla tanışın.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 max-w-4xl mx-auto space-y-6"
        >
          <p className="text-lg text-white/90 leading-relaxed text-center">
            Kurulduğumuz günden bu yana, öğrencilerimizin bireysel farklılıklarını gözeterek
            onların potansiyellerini en üst düzeye çıkaracak bir eğitim ortamı sunmayı
            hedefliyoruz. Yenilikçi öğrenme tekniklerini ve teknolojiyi birleştirerek; akademik
            başarı kadar karakter gelişimini de merkeze alan bir anlayışla çalışıyoruz.
          </p>
          <p className="text-lg text-white/90 leading-relaxed text-center">
            Öğrenci, veli ve öğretmenler arasında güçlü bir iletişim ağı kurarak, şeffaf ve
            güvenilir bir eğitim modeli benimsiyoruz. Vizyonumuz; etik değerlere bağlı, çağın
            gereklerine uyum sağlayan bireyler yetiştirmektir. Her gün daha iyi olmak için
            ilerliyor, geleceği birlikte inşa ediyoruz.
          </p>
        </motion.div>
      </section>

      {/* İkonlu Bilgi Kartları */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[ // Kartları map ile dönmek daha sade
            {
              icon: <FaLightbulb className="mx-auto text-4xl text-white mb-4" />,
              title: 'Vizyonumuz',
              desc: 'Her öğrencinin potansiyelini gerçekleştirmesini sağlamak.',
            },
            {
              icon: <FaBullseye className="mx-auto text-4xl text-white mb-4" />,
              title: 'Misyonumuz',
              desc: 'Öğrenci merkezli, kişiye özel eğitim anlayışı sunmak.',
            },
            {
              icon: <FaUsers className="mx-auto text-4xl text-white mb-4" />,
              title: 'Değerlerimiz',
              desc: 'Saygı, güven, yenilikçilik ve sürekli gelişim ilkeleriyle hareket ederiz.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#00476f] p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              {item.icon}
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Görsel + Metin Bloğu */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/teacher.jpg"
              alt="Eğitim Kadromuz"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Öğrencilerimizin yanındayız</h3>
            <p className="text-white/90 leading-relaxed text-lg">
              Her öğrencinin kendi potansiyelini keşfetmesi için güçlü bir rehberlik sistemiyle
              çalışıyoruz. Başarıya giden yolda birlikte ilerliyoruz.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

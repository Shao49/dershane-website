'use client'

import { MapPin, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#002d4a] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Logo + kısa açıklama */}
        <div>
          <h3 className="text-3xl font-bold mb-4">Dershane</h3>
          <p className="text-white/85 text-sm leading-relaxed">
            Hedefinize giden yolda, uzman kadromuz ve kişiye özel eğitim sistemimizle yanınızdayız.
          </p>
        </div>

        {/* Menü Linkleri */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Menü</h4>
          <ul className="space-y-3 text-white/90 text-sm">
            <li>
              <Link href="/" className="hover:underline hover:text-white">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link href="/hakkimizda" className="hover:underline hover:text-white">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="hover:underline hover:text-white">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        {/* İletişim Bilgileri */}
        <div>
          <h4 className="text-xl font-semibold mb-4">İletişim</h4>
          <ul className="space-y-3 text-white/90 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-white" />
              İstanbul, Türkiye
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-white" />
              +90 555 555 5555
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-white" />
              info@dershane.com
            </li>
          </ul>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-white/70 text-sm">
        © {new Date().getFullYear()} Dershane. Tüm hakları saklıdır.
      </div>
    </footer>
  )
}

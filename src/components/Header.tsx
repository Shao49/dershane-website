'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navItems = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'İletişim', href: '/iletisim' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-white/70 backdrop-blur-xl backdrop-saturate-150'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-neutral-900 tracking-tight"
        >
          Dershane
        </Link>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className={`relative px-2 py-1 font-semibold transition-all duration-300
                  ${isActive ? 'text-[#002d4a]' : 'text-neutral-800'}
                  after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
                  after:w-0 after:h-[2px] after:bg-[#002d4a] after:rounded-full 
                  hover:after:w-full after:transition-all after:duration-300
                  hover:text-[#002d4a]
                `}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobil Menü Butonu */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-neutral-800 focus:outline-none"
          >
            <Bars3Icon className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobil Menü Paneli - Premium görünüm */}
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" />
        <Dialog.Panel className="fixed top-0 right-0 w-[80%] max-w-xs h-full z-50 bg-white/90 backdrop-blur-lg border-l border-gray-200 shadow-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className="text-xl font-extrabold text-[#002d4a]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dershane
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="text-neutral-700">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-5 mt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-lg font-semibold rounded-lg py-2 px-3 transition 
                  ${
                    pathname === item.href
                      ? 'bg-[#002d4a] text-white'
                      : 'text-neutral-800 hover:bg-gray-100'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-10 border-t pt-6 text-sm text-neutral-500">
            © 2025 Dershane. Tüm hakları saklıdır.
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

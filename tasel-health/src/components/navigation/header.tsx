'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useConsultation } from '@/contexts/consultation-context'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { showForm } = useConsultation()

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'Comprehensive Care', href: '/services/comprehensive-care' },
        { name: 'TMS Therapy', href: '/services/tms-therapy' },
        { name: 'Spravato/Ketamine', href: '/services/spravato-ketamine' },
        { name: 'Psychiatry', href: '/services/psychiatry' },
        { name: 'Counseling', href: '/services/counseling' }
      ]
    },
    { name: 'Insurance', href: '/insurance' },
    { name: 'Knowledge Hub', href: '/knowledge-hub' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/tasel_health_logo.png`}
              alt="Tasel Health"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <span className="text-xl font-bold text-gray-900">Tasel Health</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => showForm('', 'header')}
            >
              Schedule a Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link 
                    href={item.href}
                    className="block text-gray-700 hover:text-purple-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block text-gray-600 hover:text-purple-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button 
                className="bg-purple-600 hover:bg-purple-700 w-full mt-4"
                onClick={() => {
                  showForm('', 'mobile-header')
                  setIsMenuOpen(false)
                }}
              >
                Schedule a Free Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

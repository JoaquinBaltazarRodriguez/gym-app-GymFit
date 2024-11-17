'use client'

import { Menu, X, Dumbbell, Calendar, User, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Dumbbell className="h-8 w-8 text-purple-600" />
                <span className="text-2xl font-bold text-gray-900">GymFit</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Inicio
              </Link>
              <Link href="/clases" className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Clases
              </Link>
              <Link href="/reservas" className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Mis Reservas
              </Link>
              <Link href="/perfil" className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Perfil
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-purple-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-gray-600 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">
                Inicio
              </Link>
              <Link href="/clases" className="text-gray-600 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">
                Clases
              </Link>
              <Link href="/reservas" className="text-gray-600 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">
                Mis Reservas
              </Link>
              <Link href="/perfil" className="text-gray-600 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">
                Perfil
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-purple-600 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Bienvenido a GymFit</h1>
            <p className="text-xl mb-8">Reserva tus clases y mantente en forma con nosotros.</p>
            <Link
              href="/clases"
              className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Comenzar
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Featured Classes Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Clases Destacadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Yoga Class Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/images/yoga.png"
                    alt="Yoga class"
                    layout="fill"
                    objectFit="cover"
                    className="transform hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Yoga Matutino</h3>
                  <p className="text-gray-600 mb-4">Comienza tu día con energía y flexibilidad.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600 font-medium">Cupos disponibles: 8</span>
                  </div>
                </div>
              </div>

              {/* Fitness Class Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/images/entrenamiento-funcional.png"
                    alt="Fitness class"
                    layout="fill"
                    objectFit="cover"
                    className="transform hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Entrenamiento Funcional</h3>
                  <p className="text-gray-600 mb-4">Mejora tu condición física con ejercicios dinámicos.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600 font-medium">Cupos disponibles: 5</span>
                  </div>
                </div>
              </div>

              {/* Pilates Class Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/images/pilates.png"
                    alt="Pilates class"
                    layout="fill"
                    objectFit="cover"
                    className="transform hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pilates</h3>
                  <p className="text-gray-600 mb-4">Fortalece tu core y mejora tu postura.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600 font-medium">Cupos disponibles: 10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Dumbbell className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold">GymFit</span>
              </div>
              <p className="text-gray-400">Tu gimnasio virtual para mantenerte en forma y saludable.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Términos y Condiciones
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@gymfit.com</li>
                <li>Teléfono: (123) 456-7890</li>
                <li>Dirección: Calle Principal 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GymFit. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
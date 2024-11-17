'use client'

import Link from 'next/link'
import { Dumbbell } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">GymFit</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${isActive('/')} transition-colors duration-200 text-sm font-medium`}>
              Inicio
            </Link>
            <Link href="/clases" className={`${isActive('/clases')} transition-colors duration-200 text-sm font-medium`}>
              Clases
            </Link>
            <Link href="/mis-reservas" className={`${isActive('/mis-reservas')} transition-colors duration-200 text-sm font-medium`}>
              Mis Reservas
            </Link>
            <Link href="/perfil" className={`${isActive('/perfil')} transition-colors duration-200 text-sm font-medium`}>
              Perfil
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
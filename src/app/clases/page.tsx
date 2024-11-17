'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Class {
  id: number
  name: string
  description: string
  instructor: string
  duration: string
  capacity: number
  image: string
}

const classes: Class[] = [
  {
    id: 1,
    name: "Yoga Matutino",
    description: "Comienza tu día con energía y flexibilidad",
    instructor: "Ana García",
    duration: "60 min",
    capacity: 15,
    image: "/images/yoga.png"
  },
  {
    id: 2,
    name: "Entrenamiento Funcional",
    description: "Mejora tu condición física con ejercicios dinámicos",
    instructor: "Carlos Ruiz",
    duration: "45 min",
    capacity: 12,
    image: "/images/entrenamiento-funcional.png"
  },
  {
    id: 3,
    name: "Pilates",
    description: "Fortalece tu core y mejora tu postura",
    instructor: "María López",
    duration: "50 min",
    capacity: 10,
    image: "/images/pilates.png"
  },
  {
    id: 4,
    name: "Spinning",
    description: "Cardio intenso con música motivadora",
    instructor: "Pedro Martínez",
    duration: "45 min",
    capacity: 20,
    image: "/images/spinning.png"
  }
]

export default function ClassesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [animateCards, setAnimateCards] = useState(true)

  const filteredClasses = classes.filter(cls =>
    cls.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cls.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Nuestras Clases</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar clases..."
              className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClasses.map((cls) => (
            <div
              key={cls.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform ${
                animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                animationDelay: `${cls.id * 100}ms`
              }}
            >
              <div className="relative h-48">
                <Image
                  src={cls.image}
                  alt={cls.name}
                  layout="fill"
                  objectFit="cover"
                  className="transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cls.name}</h3>
                <p className="text-gray-600 mb-4">{cls.description}</p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Instructor:</span> {cls.instructor}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Duración:</span> {cls.duration}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Capacidad:</span> {cls.capacity} personas
                  </p>
                </div>
                <Link
                  href={`/clases/${cls.id}`}
                  className="block w-full bg-purple-600 text-white text-center px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                >
                  Reservar Clase
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredClasses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No se encontraron clases que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  )
}
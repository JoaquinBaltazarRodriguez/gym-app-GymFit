'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Clock, Users, CalendarIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface ClassDetails {
  id: number
  name: string
  description: string
  instructor: string
  duration: string
  capacity: number
  image: string
  schedule: string[]
  benefits: string[]
}

const classDetails: ClassDetails = {
  id: 1,
  name: "Yoga Matutino",
  description: "Comienza tu día con energía y flexibilidad. Una clase diseñada para todos los niveles que te ayudará a mejorar tu flexibilidad, fuerza y equilibrio.",
  instructor: "Ana García",
  duration: "60 min",
  capacity: 15,
  image: "/placeholder.svg?height=600&width=800",
  schedule: [
    "Lunes - 7:00 AM",
    "Miércoles - 7:00 AM",
    "Viernes - 7:00 AM"
  ],
  benefits: [
    "Mejora la flexibilidad",
    "Reduce el estrés",
    "Fortalece los músculos",
    "Mejora la postura"
  ]
}

export default function ClassDetailsPage() {
  const [selectedDate, setSelectedDate] = useState('')
  const [isReserved, setIsReserved] = useState(false)

  useEffect(() => {
    const savedReservations = localStorage.getItem('gymfit_reservations') || '[]'
    const reservations = JSON.parse(savedReservations)
    const isAlreadyReserved = reservations.some(
      (reservation: any) => reservation.classId === classDetails.id && reservation.date === selectedDate
    )
    setIsReserved(isAlreadyReserved)
  }, [selectedDate, classDetails.id])

  const handleReservation = () => {
    if (selectedDate && !isReserved) {
      const newReservation = {
        id: `${classDetails.id}-${Date.now()}`,
        classId: classDetails.id,
        className: classDetails.name,
        date: selectedDate.split('-')[0].trim(),
        time: selectedDate.split('-')[1].trim(),
        instructor: classDetails.instructor,
        image: classDetails.image,
        reservationDate: new Date().toLocaleDateString()
      }

      const savedReservations = localStorage.getItem('gymfit_reservations') || '[]'
      const reservations = JSON.parse(savedReservations)
      reservations.push(newReservation)
      localStorage.setItem('gymfit_reservations', JSON.stringify(reservations))
      setIsReserved(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/clases"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver a Clases
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src={classDetails.image}
              alt={classDetails.name}
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{classDetails.name}</h1>
              <p className="text-gray-600">{classDetails.description}</p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-purple-600 mr-2" />
                <span>{classDetails.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-purple-600 mr-2" />
                <span>{classDetails.capacity} personas max.</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Horarios Disponibles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {classDetails.schedule.map((time, index) => (
                  <label
                    key={index}
                    className="relative flex items-center p-4 border rounded-lg cursor-pointer hover:bg-purple-50"
                  >
                    <input
                      type="radio"
                      name="schedule"
                      value={time}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="hidden"
                    />
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <CalendarIcon className="h-5 w-5 text-purple-600 mr-2" />
                        <span>{time}</span>
                      </div>
                      <div className={`h-4 w-4 rounded-full border-2 ${
                        selectedDate === time ? 'border-purple-600 bg-purple-600' : 'border-gray-300'
                      }`} />
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Beneficios</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {classDetails.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-2 w-2 bg-purple-600 rounded-full mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleReservation}
              disabled={!selectedDate || isReserved}
              className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-colors duration-300 ${
                isReserved
                  ? 'bg-green-500 cursor-default'
                  : !selectedDate
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-purple-600 hover:bg-purple-700'
              }`}
            >
              {isReserved ? '¡Clase Reservada!' : 'Reservar Clase'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
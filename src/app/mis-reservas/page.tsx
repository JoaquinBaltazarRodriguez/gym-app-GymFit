'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, X } from 'lucide-react'
import Image from 'next/image'

interface Reservation {
  id: string
  className: string
  date: string
  time: string
  instructor: string
  image: string
  reservationDate: string
}

export default function MisReservasPage() {
  const [reservations, setReservations] = useState<Reservation[]>([])

  useEffect(() => {
    // Cargar reservas del localStorage
    const savedReservations = localStorage.getItem('gymfit_reservations')
    if (savedReservations) {
      setReservations(JSON.parse(savedReservations))
    }
  }, [])

  const handleCancelReservation = (id: string) => {
    const updatedReservations = reservations.filter(res => res.id !== id)
    setReservations(updatedReservations)
    localStorage.setItem('gymfit_reservations', JSON.stringify(updatedReservations))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Mis Reservas</h1>
        
        {reservations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No tienes reservas activas.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reservations.map((reservation) => (
              <div key={reservation.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={reservation.image}
                    alt={reservation.className}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{reservation.className}</h3>
                    <button
                      onClick={() => handleCancelReservation(reservation.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>{reservation.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2" />
                      <span>{reservation.time}</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Instructor: {reservation.instructor}
                    </p>
                    <p className="text-sm text-gray-500">
                      Reservado el: {reservation.reservationDate}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
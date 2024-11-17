'use client'

import { useState, useEffect } from 'react'
import { Camera, Save } from 'lucide-react'
import Image from 'next/image'

interface UserProfile {
  name: string
  lastName: string
  email: string
  phone: string
  image: string
}

export default function PerfilPage() {
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Juan',
    lastName: 'Pérez',
    email: 'juan.perez@example.com',
    phone: '+1234567890',
    image: '/placeholder.svg?height=200&width=200'
  })
  const [isEditing, setIsEditing] = useState(false)
  const [tempProfile, setTempProfile] = useState(profile)

  useEffect(() => {
    const savedProfile = localStorage.getItem('gymfit_user_profile')
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile))
      setTempProfile(JSON.parse(savedProfile))
    }
  }, [])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setTempProfile(prev => ({ ...prev, image: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    setProfile(tempProfile)
    localStorage.setItem('gymfit_user_profile', JSON.stringify(tempProfile))
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-32 bg-purple-600">
            <div className="absolute -bottom-16 left-6">
              <div className="relative">
                <Image
                  src={tempProfile.image}
                  alt="Profile"
                  width={128}
                  height={128}
                  className="rounded-full border-4 border-white"
                />
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full cursor-pointer hover:bg-purple-700 transition-colors">
                    <Camera className="h-5 w-5" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </label>
                )}
              </div>
            </div>
          </div>

          <div className="pt-20 p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Perfil de Usuario</h1>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Editar Perfil
                </button>
              ) : (
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
                >
                  <Save className="h-5 w-5 mr-2" />
                  Guardar Cambios
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input
                  type="text"
                  value={tempProfile.name}
                  onChange={(e) => setTempProfile(prev => ({ ...prev, name: e.target.value }))}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent disabled:bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
                <input
                  type="text"
                  value={tempProfile.lastName}
                  onChange={(e) => setTempProfile(prev => ({ ...prev, lastName: e.target.value }))}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent disabled:bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={tempProfile.email}
                  onChange={(e) => setTempProfile(prev => ({ ...prev, email: e.target.value }))}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent disabled:bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input
                  type="tel"
                  value={tempProfile.phone}
                  onChange={(e) => setTempProfile(prev => ({ ...prev, phone: e.target.value }))}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent disabled:bg-gray-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
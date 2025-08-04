import Login from '@/components/client/Auth/Login'
import Register from '@/components/client/Auth/Register'
import React, { useState } from 'react'

const Auth = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Tab Navigation */}
      <div className="flex justify-center pt-8 pb-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-1 shadow-lg border border-white/20">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab('login')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'login'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'register'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        {activeTab === 'login' ? <Login /> : <Register />}
      </div>
    </div>
  )
}

export default Auth
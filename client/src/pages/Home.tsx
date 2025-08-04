import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@/contexts/UserContext'
import { Button } from '@/components/ui/button'

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useUser();

  useEffect(() => {
    if (isAuthenticated && !loading) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Vrozart Recruit
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your gateway to amazing opportunities and career growth
        </p>
        <div className="space-x-4">
          <Button 
            onClick={() => navigate('/auth')}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
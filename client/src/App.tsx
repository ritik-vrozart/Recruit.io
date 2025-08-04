import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Auth from './pages/Auth'
import DashboardLayout from './layout/DashboardLayout'
import Dashboard from './pages/Dashboard'
import ScheduledInterviews from './pages/ScheduledInterviews'
import AllInterviews from './pages/AllInterviews'
import Billing from './pages/Billing'
import Settings from './pages/Settings'

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route 
          path='/auth' 
          element={
            <ProtectedRoute requireAuth={false}>
              <Auth />
            </ProtectedRoute>
          } 
        />
        <Route 
          path='/dashboard' 
          element={
            <ProtectedRoute requireAuth={true}>
              <DashboardLayout />
            </ProtectedRoute>
          } 
        >
          <Route index element={<Dashboard />} />
          <Route path="scheduled-interviews" element={<ScheduledInterviews />} />
          <Route path="all-interviews" element={<AllInterviews />} />
          <Route path="billing" element={<Billing />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </UserProvider>
  )
}

export default App
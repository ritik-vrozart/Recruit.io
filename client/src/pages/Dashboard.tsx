import CreateOption from '@/components/client/Dashboard/CreateOption';
import { useUser } from '@/contexts/UserContext';
import React from 'react'

const Dashboard = () => {

  const {user} = useUser();

  console.log("USER==>> ", user)

  return (
   <>
   <div>
    <div className=' bg-white p-4 rounded-2xl flex justify-between '>
      <div>
      <h2 className=' text-lg  font-bold'>Welcome Back {user?.name}</h2>
      <h2>Ai Driven Interview Platform, Hassle Free Hiring</h2>
      </div>
      <CreateOption/>
    </div>
   </div>
   </>
  )
}

export default Dashboard
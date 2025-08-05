import CreateOption from '@/components/client/Dashboard/CreateOption';
import LatestInterviews from '@/components/client/Dashboard/LatestInterviews';
import { Button } from '@/components/ui/button';
import { useUser } from '@/contexts/UserContext';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const { user } = useUser();

  console.log("USER==>> ", user)

  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className=' bg-white p-4 rounded-2xl flex justify-between '>
          <div>
            <h2 className=' text-lg  font-bold'>Welcome Back {user?.name}</h2>
            <h2>Ai Driven Interview Platform, Hassle Free Hiring</h2>
          </div>
          <Button variant="ghost"
          onClick={() => navigate("/dashboard/create-interview")}
          >Create New Interview</Button>
        </div>

        <h2 className=' my-3 text-2xl font-bold'>Dashboard</h2>
        <CreateOption />

        <LatestInterviews/>

      </div>
    </>
  )
}

export default Dashboard
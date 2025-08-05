import { Phone, Video } from 'lucide-react'
import React from 'react'

const CreateOption = () => {
  return (
    <div className=' grid grid-cols-2 gap-5'>
        <div className=' bg-white p-4 rounded-2xl'>
            <Video className=' p-3 bg-blue-50 rounded-lg h-12 w-12'/>
            <h2 className='font-bold'>Create New Interview</h2>
            <p>Create a new interview for hassle free hiring</p>
        </div>
        <div className=' bg-white p-4 rounded-2xl'>
            <Phone className=' p-3 bg-blue-50 rounded-lg h-12 w-12'/>
            <h2 className='font-bold'>Create Phone Screening Call</h2>
            <p>Create a new interview for hassle free hiring</p>
        </div>
    </div>
  )
}

export default CreateOption
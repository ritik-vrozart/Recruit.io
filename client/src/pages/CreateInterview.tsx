import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const CreateInterview = () => {

    const navigate = useNavigate();

    return (
        <div className=' mt-10 px-10 md:px-24 lg:px-44 xl:px-56'>
            <div className=' flex items-center gap-4'>
                <ArrowLeft onClick={() => navigate(-1)} />
                <h2 className=' text-2xl font-bold'>Create New Interview</h2>
            </div>
        </div>
    )
}

export default CreateInterview
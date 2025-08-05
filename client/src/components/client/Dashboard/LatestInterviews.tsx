import { Button } from '@/components/ui/button';
import React, { useState } from 'react'

const LatestInterviews = () => {

    const [interviewLists, setInterviewLists] = useState<any[]>([]);

    return (
        <div className=' my-5'>
            <h2 className=' text-2xl font-bold'>Latest Intervoew Details</h2>


            {
                interviewLists.length === 0 && (
                    <div className=' my-5 p-5 flex flex-col items-center justify-center bg-white rounded-2xl'>
                        <h2 className=' text-lg font-bold'>No Interview Found</h2>
                        <p>Create a new interview for hassle free hiring</p>
                        <Button variant="outline">Create New Interview</Button>
                    </div>
                )
            }

        </div>
    )
}

export default LatestInterviews
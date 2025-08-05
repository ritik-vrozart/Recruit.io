import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



interface FormData {
    jobTitle: string;
    description: string;
    category: string;
}

const CreateInterview = () => {

    const navigate = useNavigate();


    const [formData, setFormData] = useState<FormData>({
        jobTitle: "",
        description: "",
        category: "",
    })

    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }

    const categories = [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "DevOps Engineer",
        "Data Scientist",
        "AI Engineer",
        "Cyber Security Engineer",
    ]

    return (
        <div className=' mt-10 px-10 md:px-24 lg:px-44 xl:px-56'>
            <div className=' flex items-center gap-4'>
                <ArrowLeft onClick={() => navigate(-1)} />
                <h2 className=' text-2xl font-bold'>Create New Interview</h2>



            </div>

            <div className=' my-5 border border-gray-200 rounded-lg p-5'>
                <form action="" className=' flex flex-col gap-5' onSubmit={handleSubmit}>
                    <div className=' flex flex-col gap-2'>
                        <label htmlFor="jobTitle">Job Title</label>
                        <input type="text" placeholder='Enter Job Title' name='jobTitle' value={formData.jobTitle} onChange={handleChange} />
                    </div>
                    <div className=' flex flex-col gap-2'>
                        <label htmlFor="jobTitle">Description</label>
                        <input type="text" placeholder='Enter Job Description' name='description' value={formData.description} onChange={handleChange} />
                    </div>
                    <div className=' flex flex-col gap-2'>
                        <label htmlFor="jobTitle">Category</label>
                        {/* <select name="" id=""> */}
                        <div className=' grid grid-cols-2 gap-2'>
                            {categories.map((category, index) => (
                                <Button 
                                    key={index} 
                                    variant={formData.category === category ? "default" : "outline"} 
                                    className={`cursor-pointer transition-all duration-200 ${
                                        formData.category === category 
                                            ? 'bg-blue-500 text-white hover:bg-blue-600' 
                                            : 'hover:bg-gray-50'
                                    }`} 
                                    onClick={() => setFormData({ ...formData, category: category })}
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                        {/* </select> */}
                    </div>

                        <div className=' w-full'>
                        <Button className=' w-full bg-blue-400 text-white cursor-pointer'>Create Interview</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateInterview
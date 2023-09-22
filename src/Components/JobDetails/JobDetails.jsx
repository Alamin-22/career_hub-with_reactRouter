import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar } from 'react-icons/ai';
import { HiCalendar, HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);



    const handleApplyJobs=()=>{
        toast.success("You have Applied SuccessFully!!",{position: "top-center",})
    }




    return (
        <div>
            <h2 className="text-3xl text-center py-20 font-medium">Job Details of : {job.job_title}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 p-5 rounded-lg space-y-4">
                    <h1><span className="font-extrabold text-lg">Job Description :</span> {job.job_description}</h1>
                    <p><span className="font-extrabold text-lg">Job Responsibility :</span> {job.job_responsibility}</p>
                    <p><span className="font-extrabold text-lg">Educational Requirements :</span> <br /> {job.educational_requirements}</p>
                    <p><span className="font-extrabold text-lg">Experiences :</span> <br /> {job.experiences}</p>
                </div>
                <div className="border p-4 rounded-lg bg-gradient-to-r from-[#6b77c728] to-[#8e73df48] ">
                    <h1 className="font-extrabold text-xl">Job Details</h1> <hr className="my-3" />
                    <div className="space-y-3">
                        <p className="flex space-x-1"><AiOutlineDollar className="text-2xl text-[#9873FF]"></AiOutlineDollar> <span> <span className="font-bold">Salary:</span> {job.salary}</span> (Per Month)</p>
                        <p className="flex space-x-1"><HiCalendar className="text-2xl text-[#9873FF]"></HiCalendar> <span> <span className="font-bold">Job Title :</span> {job.job_title}</span></p>
                        <h1 className="text-xl font-bold">Contact Information:</h1>
                        <p className="flex space-x-1 items-center"><FiPhoneCall className="text-2xl text-[#9873FF]"></FiPhoneCall> <span> <span className="font-bold">Phone :</span> {job.contact_information.phone}</span></p>
                        <p className="flex space-x-1 items-center"><HiOutlineMail className="text-2xl text-[#9873FF]"></HiOutlineMail> <span> <span className="font-bold">Email :</span> {job.contact_information.email}</span></p>
                        <p className="flex space-x-1 "><FaLocationDot className="text-3xl text-[#9873FF]"></FaLocationDot> <span> <span className="font-bold">Address :</span> {job.contact_information.address}</span></p> <hr className="my-3" />
                    </div>
                    <button onClick={handleApplyJobs} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;
import PropTypes from 'prop-types'; // ES6
import { NavLink } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import { BiSolidBadgeDollar } from 'react-icons/bi';

const ShowAppliedJobs = ({ job }) => {
    const { job_title, location, company_name,  job_type, salary, logo, remote_or_onsite } = job;
    return (
        <div>
            <div className="flex justify-between overflow-hidden items-center bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className=" max-w-[250px] px-4 bg-cover"> <img src={logo} alt="logo" /></div>

                <div className="  w-2/3 p-4 md:p-4">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{job_title}</h1>

                    <p className="mt-2 text-2xl text-gray-600 dark:text-gray-400">{company_name}</p>
                    <div className='space-x-5 mt-3'>
                        <NavLink /* to="/remote_or_outside" */ className="btn border-2 border-[#9873FF] hover:border-[#9873FF] bg-transparent text-[#7E90FE]">{remote_or_onsite}</NavLink>
                        <NavLink /* to="/job_type" */ className="btn border-2 border-[#9873FF] hover:border-[#9873FF] bg-transparent text-[#9873FF]">{job_type}</NavLink>
                    </div>
                    <div className='flex space-x-5 p-5'>
                        <p className='flex items-center'> <FaLocationDot className='text-2xl text-[#9873FF]' /> <span>{location}</span></p>
                        <p className='flex items-center'> <BiSolidBadgeDollar className='text-2xl text-[#9873FF]' /> <span>{salary}</span></p>
                    </div>
                   

                </div>
                <div className="mt-3 mr-2 item-center">
                    <button className="btn  bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

ShowAppliedJobs.propTypes = {
    job: PropTypes.object.isRequired,
}
export default ShowAppliedJobs;
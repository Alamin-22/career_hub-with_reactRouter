import PropTypes from 'prop-types'; // ES6
import { NavLink } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import { BiSolidBadgeDollar } from 'react-icons/bi';
const Job = ({ job }) => {
    console.log(job)
    const { id , job_title, location, company_name, /* educational_requirements ,*/ job_type, salary, /* job_description, job_responsibility, experiences,  */logo, remote_or_onsite } = job;
    return (

        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={logo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className='space-x-5'>
                    <NavLink /* to="/remote_or_outside" */ className="btn border-2 border-[#9873FF] hover:border-[#9873FF] bg-transparent text-[#7E90FE]">{remote_or_onsite}</NavLink>
                    <NavLink /* to="/job_type" */ className="btn border-2 border-[#9873FF] hover:border-[#9873FF] bg-transparent text-[#9873FF]">{job_type}</NavLink>
                </div>
                <div className='flex space-x-5 p-5'>
                    <p className='flex items-center'> <FaLocationDot className='text-2xl text-[#9873FF]'/> <span>{location}</span></p>
                    <p className='flex items-center'> <BiSolidBadgeDollar className='text-2xl text-[#9873FF]'/> <span>{salary}</span></p>
                </div>
                <div className="card-actions">
                    <NavLink to={`/job/${id}`} className="btn btn-primary">View Details</NavLink>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired,
}
export default Job;
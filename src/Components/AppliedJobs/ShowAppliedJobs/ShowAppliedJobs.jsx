import PropTypes from 'prop-types'; // ES6

const ShowAppliedJobs = ({ job }) => {
    const { id, job_title, location, company_name, /* educational_requirements ,*/ job_type, salary, /* job_description, job_responsibility, experiences,  */logo, remote_or_onsite } = job;
    return (
        <div>
            <h1 className='text-3xl'>Remote Or On site: {remote_or_onsite}</h1>
        </div>
    );
};

ShowAppliedJobs.propTypes = {
    job: PropTypes.object.isRequired,
}
export default ShowAppliedJobs;
import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    // console.log(jobs)

    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (
        <div>
            <div className="text-center mt-36">
                <h1 className="text-5xl">Featured Jobs: {jobs.length}</h1>
                <p className="text-xl p-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-96 mx-auto md:w-full">
                {
                    jobs.map(job=> <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;
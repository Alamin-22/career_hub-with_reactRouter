import { useEffect, useState } from "react";
import {  useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage/LocalStorage";
import ShowAppliedJobs from "./ShowAppliedJobs/ShowAppliedJobs";
import { IoIosArrowDropdown } from 'react-icons/io';
import { Helmet } from "react-helmet-async";

const Applied_Jobs = () => {
    const jobs = useLoaderData();

    const [appliedJob, setAppliedJob] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);


    const handleJobsFilter = filter => {
        if (filter === "all") {
            setDisplayJobs(appliedJob)
        } else if (filter === "remote") {
            const remoteJobs = appliedJob.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJobs(remoteJobs);
        } else if (filter === "onsite") {
            const onsiteJobs = appliedJob.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayJobs(onsiteJobs);
        }
    }



    useEffect(() => {
        const storedJobsIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied= jobs.filter(job => storedJobsIds.includes(job.id));
            // console.log(jobsApplied)


            const jobsApplied = [];
            for (const id of storedJobsIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJob(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs])
    return (
        <div>
            <Helmet><title>Career Hub || Applied Jobs</title></Helmet>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl">Applied Jobs: {appliedJob.length}</h2>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-primary m-1">Filter<IoIosArrowDropdown className="text-2xl"/></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleJobsFilter("all")}><a>All</a></li>
                        <li onClick={()=>handleJobsFilter("remote")}><a>Remote</a></li>
                        <li onClick={()=>handleJobsFilter("onsite")}><a>Onsite</a></li>
                    </ul>
                </div>
            </div> <hr />

            <div className="space-y-4 my-8">
                {
                    displayJobs.map(job => <ShowAppliedJobs key={job.id} job={job}></ShowAppliedJobs>)
                }
            </div>
        </div>
    );
};

export default Applied_Jobs;
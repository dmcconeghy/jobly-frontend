import React, { useEffect, useState } from "react";
import JoblyApi from "../api";
import LoadingSpinner from "../LoadingSpinner";
import JobCard from "./JobCard";
import SearchForm from "./SearchForm";

function JobsList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        search();
    }, []);

    async function search(title) {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    }

    const jobCards = jobs.map(job => <JobCard key={job.id} job={job} />);

    if (!jobs) return <LoadingSpinner />;

    return (
        <div>
            <h1>Jobs</h1>
            <SearchForm search={search} />
            {jobCards}
            
        </div>
    );
}

export default JobsList;
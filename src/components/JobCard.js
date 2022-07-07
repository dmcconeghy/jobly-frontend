import React from "react"

import "./JobCard.css";

function JobCard({job}) {
    return (
        <div className="job-card">
            <div>
                <h5>{job.title}</h5>
                <h5>{job.companyHandle} Test</h5>
                {job.salary && <p>Salary: {job.salary}</p>}
                {job.equity && <p>Equity: {job.equity}</p>}
            </div>
        </div>
    )
}

export default JobCard;
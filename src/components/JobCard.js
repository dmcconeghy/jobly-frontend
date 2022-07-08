import React, { useContext, useEffect, useState } from "react";
import UserContext from "../UserContext";

import "./JobCard.css";

function JobCard({job}) {
    const { hasApplied, applyTo } = useContext(UserContext);
    const [applied, setApplied] = useState();

    useEffect(
        function updateStatus() {
            setApplied(hasApplied(job.id));
        },
        [job.id, hasApplied]
    );

    async function handleApply(event){
        if (hasApplied(job.id)) return;
        await applyTo(job.id);
        setApplied(true);
    }
    

    return (
        <div className="job-card">
            {applied && <div className="applied">Applied</div>}
            <div>
                <h5>{job.title}</h5>
                <h5>{job.companyHandle} Test</h5>
                {job.salary && <p>Salary: {job.salary}</p>}
                {job.equity && <p>Equity: {job.equity}</p>}
                <p>{job.description}</p>
                <button onClick={handleApply} disabled={applied}>
                    {applied ? "Applied": "Apply"}
                </button>
            </div>
        </div>
    )
}

export default JobCard;
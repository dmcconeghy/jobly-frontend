import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import JoblyApi from "../api";
import JobCard from "./JobCard";

import "./CompanyDetails.css";



function CompanyDetails() {
    const { handle } = useParams();
    const [company, setCompany] = React.useState(null);

    useEffect(() => {
        async function getCompanyDetails() {
            setCompany(await JoblyApi.getCompany(handle));
        }
        getCompanyDetails();
        }, [handle]);
        
        if (!company) return <LoadingSpinner />;

        let jobCards = company.jobs.map(job => <JobCard key={job.id} job={job} />);

        return (
            <div className="company-details">
                <h1>{ company.name }</h1>
                <h3>{ company.description }</h3>
                <p> Employees: { company.numEmployees }</p>
                <div>
                    <h3>Available Jobs:</h3>
                    { jobCards }
                </div>
            </div>
        );
}

export default CompanyDetails;
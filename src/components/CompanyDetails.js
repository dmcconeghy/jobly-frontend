import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import JoblyApi from "../api";
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

        return (
            <div className="company-details">
                <h1>{ company.name }</h1>
                <h2>{ company.description }</h2>
                <p> Employees: { company.numEmployees }</p>
            </div>
        );
}

export default CompanyDetails;
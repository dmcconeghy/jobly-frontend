import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import JoblyApi from "../api";

function CompanyDetails() {
    const { handle } = useParams();
    const [company, setCompany] = React.useState(null);

    useEffect(() => {
        async function getCompanyDetails() {
            setCompany(await JoblyApi.getCompany(handle));
        }
        getCompanyDetails();
        }, [handle]);
        
        if (!company) return 
            <LoadingSpinner />;
        return (
            <div>
                <h1>This is the page for the details about { handle } company</h1>
            </div>
        );
}

export default CompanyDetails;
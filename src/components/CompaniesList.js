import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import LoadingSpinner from "../LoadingSpinner";


function CompaniesList() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        search();
    }, []);

    async function search(name){
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }

    const companyCards = companies.map(company => <CompanyCard key={company.handle} company={company} />);

    if (!companies) return <LoadingSpinner />;

    return (
        <div>
            <h1>Companies</h1>
            <SearchForm search={search} />
            {companyCards}
        </div>
    );
}

export default CompaniesList;
import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

function CompanyCard({company}) {
    return (
        <Link to={`/companies/${company.handle}`}>
            <div className="company-card">
            
                <h2>{company.name}</h2>
        
                <p>{company.description}</p>

            </div>
        </Link>
    );
}

export default CompanyCard;
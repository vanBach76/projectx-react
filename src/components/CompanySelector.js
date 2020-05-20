import React from 'react';

function CompanySelector({ companyList, selectCompany }) {

    let selectableCompanies = companyList.map((company) => (
        <div key={company.name}>
                <button className="btn btn-primary btn-light btn-block" onClick={() => selectCompany(company)}>
                    {company.name}
                </button>
        </div>
    ));

    return (
        <div className="btn-group-vertica special" >
                {selectableCompanies}
        </div>
    );
}

export default CompanySelector;